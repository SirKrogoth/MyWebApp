using System.Collections.Generic;
using MyWebApp.AcessaDados.Entidades;

namespace MyWebApp.AcessaDados
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
        Produto ObterProdutoPorID(int id);
        void Salvar(Produto produto);
    }
}