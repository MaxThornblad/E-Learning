using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class PublishedPropertyAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4fe15f90-5d32-4e97-80d3-058a49f3574d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "94ecbf38-b17b-43cf-83d9-6cda392f6b2c");

            migrationBuilder.AddColumn<bool>(
                name: "Published",
                table: "Courses",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "b8ca049f-0fc0-4dfc-b55a-bdf59f9bfb2f", "dc239d6a-62d1-436a-ad63-4f1da5c740fc", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "11c65ec8-d56b-40bc-83cf-041f1ed5ef16", "06c2683a-92fd-46c5-aeba-5b73d4d8fecf", "Instructor", "INSTRUCTOR" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "11c65ec8-d56b-40bc-83cf-041f1ed5ef16");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b8ca049f-0fc0-4dfc-b55a-bdf59f9bfb2f");

            migrationBuilder.DropColumn(
                name: "Published",
                table: "Courses");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "94ecbf38-b17b-43cf-83d9-6cda392f6b2c", "185d1fc5-133f-4f06-bcfe-0cbb02b09ec5", "Student", "STUDENT" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "4fe15f90-5d32-4e97-80d3-058a49f3574d", "18c69a6f-3686-46da-86bd-be24fd23d5d8", "Instructor", "INSTRUCTOR" });
        }
    }
}
