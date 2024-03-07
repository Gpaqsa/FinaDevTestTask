using System;
using FinaDevProject.Models;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;  // Add this line
using ProductManagementAPI.Entities;       // Add this line

namespace FinaDevProject.Data
{
    public class AppDbContext : DbContextd
    {
        public DbSet<Product> Products { get; set; }
        protected readonly IConfiguration Configuration;

        public AppDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }
    }
}
