import {Component, OnInit} from "@angular/core"
import { DataServices } from '../Servicos/dataServices';
import { Produto } from "../modelos/produto";

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: []
})

export class ListaProduto implements OnInit{
    
    constructor(private data: DataServices) {
        this.produtos = data.produtos;
    }

    public produtos = [];

    ngOnInit(): void {
        this.data.carregarProdutos()
            .subscribe(() => this.produtos = this.data.produtos);
    }
}