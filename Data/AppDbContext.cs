using Microsoft.EntityFrameworkCore;
using MultiplicationTableApp.Models;

namespace MultiplicationTableApp.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options) : base(options) { }
        
        public DbSet<MultiplicationTableEntry> MultiplicationTableEntries { get; set; }
    }
}