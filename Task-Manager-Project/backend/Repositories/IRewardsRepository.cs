using Task_Manager_Project.Models;

namespace Task_Manager_Project.Repositories
{
public interface IRewardsRepository
{
    Task<IEnumerable<Rewards>> GetAllRewardsAsync();
    Task<Rewards> GetRewardByIdAsync(int id);
    Task AddRewardAsync(Rewards reward);
    Task UpdateRewardAsync(Rewards reward);
    Task DeleteRewardAsync(int id);
}
}