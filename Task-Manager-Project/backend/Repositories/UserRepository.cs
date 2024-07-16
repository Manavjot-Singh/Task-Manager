using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Task_Manager_Project.Context;
using Task_Manager_Project.Models;

namespace Task_Manager_Project.Repositories
{
    public class UsersRepository : IUsersRepository
    {
       private readonly TaskContext _context;

    public UsersRepository(TaskContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Users>> GetAllUsersAsync()
    {
        return await _context.Users.ToListAsync();
    }

    public async Task<Users> GetUserByIdAsync(int id)
    {
        return await _context.Users.FindAsync(id);
    }

    public async Task AddUserAsync(Users user)
    {
        await _context.Users.AddAsync(user);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateUserAsync(Users user)
    {
        _context.Users.Update(user);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(int id)
    {
        var user = await _context.Users.FindAsync(id);
        if (user != null)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
    }
}