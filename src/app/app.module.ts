import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './Componentes/carousel/carousel.component';
import { BarraNavegacionComponent } from './Componentes/barra-navegacion/barra-navegacion.component';
import { DatosPersonalesComponent } from './Componentes/datos-personales/datos-personales.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    BarraNavegacionComponent,
    DatosPersonalesComponent,
    HabilidadesComponent,
    ContactoComponent,
    InicioComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
