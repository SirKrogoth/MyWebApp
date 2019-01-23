import {Component} from "@angular/core"
import { DataServices } from '../Servicos/dataServices';

@Component({
    selector: "lista-produto",
    templateUrl: "./listaProduto.component.html",
    styleUrls: []
})
export class ListaProduto {
    constructor(private data: DataServices) {
        this.produtos = data.produtos;
    }

    public produtos = [];
}