using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MyWebApp.AcessaDados.Entidades;

namespace MyWebApp.AcessaDados
{
    public class PedidoRepository : IPedidoRepository
    {
        private MyWebApplicationContext _context;
        private IProdutoRepository _produtoRepository;

        public PedidoRepository(MyWebApplicationContext context, IProdutoRepository produtoRepository)
        {
            _context = context;
            _produtoRepository = produtoRepository;
        }        

        public List<Pedido> ListarPedidos()
        {
            return _context.Pedidos.Include(p => p.ItensPedidos).ToList();
        }
        
        public void Salvar(Pedido pedido)
        {
            foreach(var item in pedido.ItensPedidos)
                item.Produto = _produtoRepository.ObterProdutoPorID(item.Produto.Id);


            _context.Pedidos.Add(pedido);
            _context.SaveChanges(); 
        }
    }
}
