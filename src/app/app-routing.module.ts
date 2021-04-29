import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { DetallesTarjetaComponent } from './vistas/detalles-tarjeta/detalles-tarjeta.component';
import { ListaTarjetasComponent } from './vistas/lista-tarjetas/lista-tarjetas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'lista', component: ListaTarjetasComponent },
      { path: ':id', component: DetallesTarjetaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, DashboardComponent];
