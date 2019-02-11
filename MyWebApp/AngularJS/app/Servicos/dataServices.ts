import { Http, Response } from "@angular/http";
import { Produto } from "../modelos/produto";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
    constructor(private http: Http) {

    }

    public produtos = [];

    carregarProdutos() : Observable<Produto[]>{
        return this.http.get("/api/produto")
            .map((result: Response) => this.produtos = result.json());
    }
}