import {Component} from "@angular/core"

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: []
})
export class ListaProduto {
    public produtos = [
        {
            titulo: "Primeiro produto",
            preco: 10,
        },
        {
            titulo: "Segundo produto",
            preco: 20,
        },
        {
            titulo: "Terceiro produto",
            preco: 10.49,
        },
        {
            titulo: "Quarto produto",
            preco: 100.99,
        }
    ];
}