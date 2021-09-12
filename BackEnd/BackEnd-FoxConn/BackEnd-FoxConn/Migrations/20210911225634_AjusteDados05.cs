using Microsoft.EntityFrameworkCore.Migrations;

namespace BackEnd_FoxConn.Migrations
{
    public partial class AjusteDados05 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Rules",
                newName: "NameRule");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NameRule",
                table: "Rules",
                newName: "Name");
        }
    }
}
