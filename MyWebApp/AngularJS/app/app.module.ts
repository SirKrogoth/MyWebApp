import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './Loja/listaProduto.component';
import { DataServices } from './Servicos/dataServices';
import { HttpModule } from '@angular/http';
import { Carrinho } from './loja/carrinho/carrinho.component';


@NgModule({
  declarations: [
      AppComponent,
      ListaProduto,
      Carrinho
  ],
  imports: [
      BrowserModule,
      HttpModule,
      RouterModule.forRoot([], { useHash: true, enableTracing: true })
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
