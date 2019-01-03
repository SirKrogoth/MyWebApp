using MyWebApp.AcessaDados.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessaDados
{
    //Repository patter
    //Classe responsável por conectar com o banco de dados
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly MyWebApplicationContext _myWebApplicationContext;

        public ProdutoRepository(MyWebApplicationContext myWebApplicationContext)
        {
            _myWebApplicationContext = myWebApplicationContext;
        }

        public List<Produto> ListarProdutos()
        {
            return _myWebApplicationContext.Produtos.ToList();
        }

        public Produto ObterProdutoPorID(int id)
        {
            return _myWebApplicationContext.Produtos.FirstOrDefault(p => p.Id == id);
        }

        public void Salvar(Produto produto)
        {
            _myWebApplicationContext.Produtos.Add(produto);
            _myWebApplicationContext.SaveChanges();
        }
    }
}
