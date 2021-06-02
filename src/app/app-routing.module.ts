import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioLoginComponent } from './formulario/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario/formulario-registro/formulario-registro.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'user_profile', component: UserProfileComponent },
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
