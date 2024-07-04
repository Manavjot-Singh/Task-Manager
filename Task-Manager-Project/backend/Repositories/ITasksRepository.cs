using Task_Manager_Project.Models;

namespace Task_Manager_Project.Repositories
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetTasks();
        Task<Tasks> GetTask(long id);
        Task<Tasks> AddTask(Tasks task);
        Task<Tasks> UpdateTask(Tasks task);
        Task<Tasks> DeleteTask(long id);
    }
}