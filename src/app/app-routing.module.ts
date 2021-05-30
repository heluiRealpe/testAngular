import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaComponent } from './pages/vista/vista.component';

const routes: Routes = [
  { path: "vista", component: VistaComponent },
  { path: "formulario", component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
