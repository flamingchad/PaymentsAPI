using Microsoft.EntityFrameworkCore;
using PaymentsAPI.Models;

namespace PaymentsAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
        
    }

    public DbSet<PaymentDetail> PaymentDetails { get; set; }
}