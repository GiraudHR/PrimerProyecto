import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioReactiveComponent } from './formulario-reactive/formulario-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    FormularioComponent,
    FormularioReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
