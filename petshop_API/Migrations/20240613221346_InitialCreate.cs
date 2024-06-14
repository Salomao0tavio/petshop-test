using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace petshop_API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Petshop",
                columns: table => new
                {
                    Id = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Distance = table.Column<double>(type: "double precision", nullable: false),
                    SmallDogWeekdayPrice = table.Column<double>(type: "double precision", nullable: false),
                    LargeDogWeekdayPrice = table.Column<double>(type: "double precision", nullable: false),
                    SmallDogWeekendPrice = table.Column<double>(type: "double precision", nullable: false),
                    LargeDogWeekendPrice = table.Column<double>(type: "double precision", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Petshop", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Petshop");
        }
    }
}
