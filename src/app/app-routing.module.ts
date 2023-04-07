import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ListaComponent } from './components/lista/lista.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
    { path: '', component: CarruselComponent },
    { path: 'componentes', component: CarruselComponent },
    { path: 'lista', component: ListaComponent },
    { path: 'formularios', component: FormularioComponent }
  
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
