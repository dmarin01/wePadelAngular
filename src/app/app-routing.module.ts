import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario/formulario-registro/formulario-registro.component';
import { HomeComponent } from './home/home.component';
import { ListProfComponent } from './Listado/list-prof/list-prof.component';
import { ProfileComponent } from './Usuario/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: 'profesores', component: ListProfComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'update', component: ProfileComponent },
  { path: 'list', component: ListProfComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
