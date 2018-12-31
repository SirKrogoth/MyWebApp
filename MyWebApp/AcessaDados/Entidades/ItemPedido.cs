using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.AcessaDados.Entidades
{
    public class ItemPedido
    {
        public int id { get; set; }
        public Produto Produto { get; set; }
        public int quantidade { get; set; }
    }
}
