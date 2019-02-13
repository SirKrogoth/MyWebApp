import { Component } from "@angular/core";
import { DataServices } from '../../Servicos/dataServices';

@Component({
    selector: "carrinho",
    templateUrl: "carrinho.component.html",
    styleUrls: []
})

export class Carrinho {
    constructor(private data: DataServices) {

    }
}