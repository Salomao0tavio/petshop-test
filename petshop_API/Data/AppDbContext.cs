using Microsoft.EntityFrameworkCore;
using petshop_API.Models;

namespace petshop_API.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Petshop> Petshop { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            if (Petshop.Any()) return;

            Petshop.AddRange(
                new Petshop
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = "Meu Canino Feliz",
                    Distance = 2.0,
                    SmallDogWeekdayPrice = 20.0,
                    LargeDogWeekdayPrice = 40.0,
                    SmallDogWeekendPrice = 20.0 * 1.2,
                    LargeDogWeekendPrice = 40.0 * 1.2,
                },
                new Petshop
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = "Vai Rex",
                    Distance = 1.7,
                    SmallDogWeekdayPrice = 15.0,
                    LargeDogWeekdayPrice = 50.0,
                    SmallDogWeekendPrice = 20.0,
                    LargeDogWeekendPrice = 55.0,
                },
                new Petshop
                {
                    Id = Guid.NewGuid().ToString(),
                    Name = "ChowChawgas",
                    Distance = 0.8,
                    SmallDogWeekdayPrice = 30.0,
                    LargeDogWeekdayPrice = 45.0,
                    SmallDogWeekendPrice = 30.0,
                    LargeDogWeekendPrice = 45.0,
                }
            );

            SaveChanges();
        }

    }
}
