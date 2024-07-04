using Microsoft.AspNetCore.Mvc;
using Task_Manager_Project.Context;

namespace Task_Manager_Project.Controllers
{
    [Route("Task_Manager_Project/Tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskContext _context;
        public TaskController(TaskContext context)
        {
            _context = context;
        }

        [HttpGet]

        public IActionResult GetAll()
        {
            var Tasks = _context.Tasks.ToList();

            return Ok(Tasks);
        }

        [HttpGet("{ID}")]

        public IActionResult GetByID([FromRoute]long ID)
        {
            var Tasks = _context.Tasks.Find(ID);

            if (Tasks == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(Tasks);
            }

        }
    }
}