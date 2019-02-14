import { Produto } from "../modelos/produto";
import * as _ from "lodash";

export class Pedido {
    public id: number;
    public dataPedido: Date;
    public ItensPedidos: Array<ItemPedido> = new Array<ItemPedido>();

    get total(): number{
        return _.sum(_.map(this.ItensPedidos, i => i.Produto.preco * i.quantidade));
    }
}


export class ItemPedido {
    public id: number;
    public Produto: Produto;
    public quantidade: number;

    constructor() {
        this.Produto = new Produto();
    }
}