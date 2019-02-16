using MyWebApp.AcessaDados.Entidades;
using System.Collections.Generic;

namespace MyWebApp.AcessaDados
{
    public interface IPedidoRepository
    {
        List<Pedido> ListarPedidos();
        void Salvar(Pedido pedido);
    }
}