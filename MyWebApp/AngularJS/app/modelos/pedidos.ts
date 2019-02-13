import { Produto } from "../modelos/produto";

export class Pedido {
    public id: number;
    public dataPedido: Date;
    public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();
}


export class ItemPedido {
    public id: number;
    public Produto: Produto;
    public quantidade: number;

    constructor() {
        this.Produto = new Produto();
    }
}