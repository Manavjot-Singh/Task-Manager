using Microsoft.EntityFrameworkCore;
namespace bTask_Manager_Project.Context
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
        }
        public DbSet<Task_Manager_Project.Models.Users> Users { get; set; } = default!;
        public DbSet<Task_Manager_Project.Models.Tasks> Tasks { get; set; } = default!;
        public DbSet<Task_Manager_Project.Models.Rewards> Rewards { get; set; } = default!;
    }
}
