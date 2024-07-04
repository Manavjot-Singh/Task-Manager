using Microsoft.IdentityModel.Tokens;
using Task_Manager_Project.Context;
using Task_Manager_Project.Models;

namespace Task_Manager_Project.Repositories
{
    public class TaskRepository : ITasksRepository
    {
        private readonly TaskContext _context;
    
        public TaskRepository(TaskContext context)
        {
            _context = context;
        }
    
        public Task<Tasks> AddTask(Tasks task)
        {
            throw new NotImplementedException();
        }
    
        public Task<Tasks> DeleteTask(long id)
        {
            throw new NotImplementedException();
        }
    
        public Task<Tasks> GetTask(long id)
        {
            throw new NotImplementedException();
        }
    
        public Task<IEnumerable<Tasks>> GetTasks()
        {
            throw new NotImplementedException();
        }
        
        public Task<Tasks> UpdateTask(Tasks task)
        {
            throw new NotImplementedException();
        }
    }
}