using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Task_Manager_Project.Models;
using Task_Manager_Project.Repositories;

[Route("api/[controller]")]
[ApiController]
public class RewardsController : ControllerBase
{
    private readonly IRewardsRepository _rewardsRepository;

    public RewardsController(IRewardsRepository rewardsRepository)
    {
        _rewardsRepository = rewardsRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Rewards>>> GetRewards()
    {
        var rewards = await _rewardsRepository.GetAllRewardsAsync();
        return Ok(rewards);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Rewards>> GetReward(int id)
    {
        var reward = await _rewardsRepository.GetRewardByIdAsync(id);
        if (reward == null)
        {
            return NotFound();
        }
        return Ok(reward);
    }

    [HttpPost]
    public async Task<ActionResult<Rewards>> PostReward(Rewards reward)
    {
        await _rewardsRepository.AddRewardAsync(reward);
        return CreatedAtAction(nameof(GetReward), new { id = reward.Id }, reward);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutReward(int id, Rewards reward)
    {
        if (id != reward.Id)
        {
            return BadRequest();
        }
        await _rewardsRepository.UpdateRewardAsync(reward);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteReward(int id)
    {
        var reward = await _rewardsRepository.GetRewardByIdAsync(id);
        if (reward == null)
        {
            return NotFound();
        }

        await _rewardsRepository.DeleteRewardAsync(id);
        return NoContent();
    }
}
