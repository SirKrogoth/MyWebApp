import { Produto } from "../modelos/produto";

module MyWebApp.AcessaDados.Entidades {
    export class Pedido {
        public id: number;
        public dataPedido: Date;
        public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();
    }
}


module MyWebApp.AcessaDados.Entidades {
    export class ItemPedido {
        public id: number;
        public Produto: Produto;
        public quantidade: number;
    }
}