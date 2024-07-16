using Microsoft.IdentityModel.Tokens;
using Task_Manager_Project.Context;
using Task_Manager_Project.Models;
using Microsoft.EntityFrameworkCore;

namespace Task_Manager_Project.Repositories
{
    public class RewardsRepository : IRewardsRepository
{
    private readonly TaskContext _context;

    public RewardsRepository(TaskContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Rewards>> GetAllRewardsAsync()
    {
        return await _context.Rewards.ToListAsync();
    }

    public async Task<Rewards> GetRewardByIdAsync(int id)
    {
        return await _context.Rewards.FindAsync(id);
    }

    public async Task AddRewardAsync(Rewards reward)
    {
        await _context.Rewards.AddAsync(reward);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateRewardAsync(Rewards reward)
    {
        _context.Rewards.Update(reward);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteRewardAsync(int id)
    {
        var reward = await _context.Rewards.FindAsync(id);
        if (reward != null)
        {
            _context.Rewards.Remove(reward);
            await _context.SaveChangesAsync();
        }
    }
}
}