import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Pedido, ItemPedido } from "../modelos/pedidos";
import { Produto } from "../modelos/produto";

@Injectable()
export class DataServices {
    constructor(private http: Http) {

    }

    public produtos: Produto[];
    public pedido: Pedido = new Pedido;

    carregarProdutos() : Observable<Produto[]>{
        return this.http.get("/api/produto")
            .map((result: Response) => this.produtos = result.json());
    }

    adicionarProduto(produto: Produto) {
        let itemSelecionado = this.pedido.ItensPedidos.find(i => i.Produto.id == produto.id);
        let item: ItemPedido;

        if (itemSelecionado) {
            itemSelecionado.quantidade++;
        }
        else {            
            item = new ItemPedido();

            item.Produto.id = produto.id;
            item.Produto.nome = produto.nome;
            item.Produto.descricao = produto.descricao;
            item.Produto.preco = produto.preco;
            item.quantidade = 1;

            this.pedido.ItensPedidos.push(item);
        }        
    }
}