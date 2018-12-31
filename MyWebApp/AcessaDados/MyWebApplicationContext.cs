using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyWebApp.AcessaDados.Entidades;

namespace MyWebApp.AcessaDados
{
    public class MyWebApplicationContext : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> Itens { get; set; }

        public MyWebApplicationContext(DbContextOptions<MyWebApplicationContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().HasKey(p => p.Id);
            modelBuilder.Entity<Pedido>().HasKey(p => p.id);
            modelBuilder.Entity<ItemPedido>().HasKey(p => p.id);

            base.OnModelCreating(modelBuilder);
        }

        public override int SaveChanges()
        {
            ChangeTracker.DetectChanges();
            return base.SaveChanges();
        }
    }
}
