using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessaDados.Entidades
{
    public class Pedido
    {
        public int id { get; set; }
        public DateTime dataPedido { get; set; }
        public ICollection<ItemPedido> ItensPedidos { get; set; }
    }
}
