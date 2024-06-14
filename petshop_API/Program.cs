using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using petshop_API.Data;
using petshop_API.Dtos;
using petshop_API.Models;
using petshop_API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddScoped<PetshopService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Petshop API V1"));
}

app.MapPost("/api/calculateBestPetshop", async ([FromBody] VisitRequest visit, AppDbContext db, PetshopService service) =>
{
    int smallDogs = visit.SmallDogs ?? 0;
    int largeDogs = visit.LargeDogs ?? 0;
    var petshops = await db.Petshop.ToListAsync();
    var isWeekend = visit.Date.DayOfWeek == DayOfWeek.Saturday || visit.Date.DayOfWeek == DayOfWeek.Sunday;

    // Definir valores padrão caso SmallDogs ou LargeDogs sejam nulos


    if (smallDogs == 0 && largeDogs == 0)
        return Results.BadRequest("Dados invalidos");

    Petshop bestPetshop = null;
    double bestPrice = double.MaxValue;

    foreach (var petshop in petshops)
    {
        double totalPrice = service.CalculateTotalPrice(petshop, smallDogs, largeDogs, isWeekend);

        if (totalPrice < bestPrice || (totalPrice == bestPrice && petshop.Distance < bestPetshop?.Distance))
        {
            bestPrice = totalPrice;
            bestPetshop = petshop;
        }
    }

    if (bestPetshop == null)
    {
        return Results.NotFound("Nao foi encontrado nenhum petshop.");
    }

    var response = new VisitResponse
    {
        BestPetshopName = bestPetshop.Name,
        TotalPrice = bestPrice
    };

    return Results.Ok(response);
})
.Produces<VisitRequest>(200)
.Produces(400)
.Produces(404);

app.Run();
