using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MultiplicationTableApp.Data;
using MultiplicationTableApp.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MultiplicationTableApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MultiplicationTableController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MultiplicationTableController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetEntries()
        {
            var entries = await _context.MultiplicationTableEntries.OrderByDescending(e => e.CreatedAt).ToListAsync();
            return Ok(entries);
        }

        [HttpPost]
        public async Task<IActionResult> AddEntry([FromBody] int number)
        {
            if (number <= 0)
            {
                return BadRequest("Invalid input. Please enter a positive integer");
            }

            var exists = await _context.MultiplicationTableEntries.AnyAsync(e => e.Number == number);
            if (exists)
            {
                return BadRequest("This number has already been entered");
            }

            var entry = new MultiplicationTableEntry
            {
                Number = number,
                CreatedAt = DateTime.Now,
            };
            _context.MultiplicationTableEntries.Add(entry);
            await _context.SaveChangesAsync();
            return Ok(entry);
        }
    }
}
