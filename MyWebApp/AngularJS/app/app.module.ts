import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ListaProduto } from './Loja/listaProduto.component';



@NgModule({
  declarations: [
      AppComponent,
      ListaProduto
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot([], { useHash: true, enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
