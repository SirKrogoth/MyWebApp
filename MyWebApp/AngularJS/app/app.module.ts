import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './Loja/listaProduto.component';
import { DataServices } from './Servicos/dataServices';
import { HttpModule } from '@angular/http';
import { Carrinho } from './loja/carrinho/carrinho.component';
import { Loja } from "./Loja/loja.component";
import { EfetivarCompra } from "./Loja/efetivarCompra/efetivarCompra.component";


let router = [
    { path: "", component: Loja },
    { path: "efetivarCompra", component: EfetivarCompra}
];

@NgModule({
  declarations: [
      AppComponent,
      ListaProduto,
      Carrinho,
      Loja,
      EfetivarCompra
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot(router, {
          useHash: true,
          enableTracing: false
      })       
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
