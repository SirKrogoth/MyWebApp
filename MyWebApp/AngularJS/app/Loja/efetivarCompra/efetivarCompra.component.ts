import { Component } from "@angular/core"
import { DataServices } from '../../Servicos/dataServices';

@Component({
    selector: "efetivar",
    templateUrl: "efetivarCompra.component.html",
    styleUrls: []
})
export class EfetivarCompra {

    constructor(private data: DataServices) {

    }

    onEfetivarCompra() {
        alert('Efetivar Compra');
    }

    onCancelarCompra() {
        this.data.pedido.ItensPedidos = null;
    }
}