// core modules
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// routing
import { routing, appRoutingProviders } from './app.routing';

// root components
import { AppComponent } from './app.component';

// external modules
import { NgParticlesModule } from "ng-particles";

import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { CarouselComponent } from './Componentes/carousel/carousel.component';
import { BarraNavegacionComponent } from './Componentes/barra-navegacion/barra-navegacion.component';
import { DatosPersonalesComponent } from './Componentes/datos-personales/datos-personales.component';
import { HabilidadesComponent } from './Componentes/habilidades/habilidades.component';
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';

@NgModule({
  declarations: [
    // root component
    AppComponent,
    // components
    CarouselComponent,
    BarraNavegacionComponent,
    DatosPersonalesComponent,
    HabilidadesComponent,
    ContactoComponent,
    InicioComponent,
    EstudiosComponent,
    
  ],
  imports: [
    // core
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    routing,
    // external 
    NgParticlesModule,
    NgbProgressbarModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
