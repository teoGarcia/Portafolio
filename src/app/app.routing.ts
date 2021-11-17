// Importar core 
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { InicioComponent } from "./Componentes/inicio/inicio.component";
import { DatosPersonalesComponent } from "./Componentes/datos-personales/datos-personales.component";
import { HabilidadesComponent } from "./Componentes/habilidades/habilidades.component";
import { CarouselComponent } from "./Componentes/carousel/carousel.component";
import { EstudiosComponent } from "./Componentes/estudios/estudios.component";

//  Array de rutas
const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Datos-personales', component: DatosPersonalesComponent},
  {path: 'Habilidades', component: HabilidadesComponent},
  {path: 'Proyectos', component: CarouselComponent},
  {path: 'Estudios', component: EstudiosComponent},
  {path: '**', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

// // inicializando el decorador de rutas
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// exportando la calse AppRoutingModule


// export class AppRoutingModule { }
