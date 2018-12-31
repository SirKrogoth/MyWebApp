using System.Collections.Generic;
using MyWebApp.AcessaDados.Entidades;

namespace MyWebApp.AcessaDados
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
    }
}