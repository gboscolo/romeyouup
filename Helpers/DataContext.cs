using Microsoft.EntityFrameworkCore;
using romeyouup.Entities;
using romeyouup.Entities;

namespace romeyouup.Helpers
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    }
}