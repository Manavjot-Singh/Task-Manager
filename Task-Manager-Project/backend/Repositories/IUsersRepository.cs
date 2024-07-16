using Task_Manager_Project.Models;

namespace Task_Manager_Project.Repositories
{
    public interface IUsersRepository
    {
        Task<IEnumerable<Users>> GetAllUsersAsync();
    Task<Users> GetUserByIdAsync(int id);
    Task AddUserAsync(Users user);
    Task UpdateUserAsync(Users user);
    Task DeleteUserAsync(int id);
    }
}