import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './component/barra/barra.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { ReclamosComponent } from './component/reclamos/reclamos.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FormularioComponent,
    FormLoginComponent,
    ReclamosComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
