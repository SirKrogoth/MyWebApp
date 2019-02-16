import { Component } from "@angular/core"
import { DataServices } from '../../Servicos/dataServices';
import { Router } from '@angular/router';

@Component({
    selector: "efetivar",
    templateUrl: "efetivarCompra.component.html",
    styleUrls: []
})
export class EfetivarCompra {
    mensagem: string;

    constructor(private data: DataServices, public router: Router) {

    }

    onEfetivarComprar() {
        this.data.efetivarComprar()
            .subscribe(sucesso => {
                if (sucesso) {
                    this.router.navigate([""]);
                }
            }, erro => this.mensagem = "Falha ao salvar pedido");
    }

    onCancelarCompra() {
        this.data.pedido.ItensPedidos = null;
    }
}