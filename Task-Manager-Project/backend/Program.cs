using bTask_Manager_Project.Context;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Configure DbContext before building the app
if (builder.Environment.IsDevelopment())
{
        builder.Services.AddDbContext<TaskContext>(options =>
        options.UseSqlServer("Server=ASUS2705\\SQLEXPRESS;Database=TaskManager;Trusted_Connection=True;TrustServerCertificate=True;"));

}

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();



app.Run();


