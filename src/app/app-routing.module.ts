import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { FormularioLoginComponent } from './formulario/formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario/formulario-registro/formulario-registro.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { ListProfComponent } from './Listado/list-prof/list-prof.component';
import { ChangeImgProfileComponent } from './Usuario/change-img-profile/change-img-profile.component';
import { ChangePasswordComponent } from './Usuario/change-password/change-password.component';
import { FormularioProfesorComponent } from './Usuario/formulario-profesor/formulario-profesor.component';
import { ProfileComponent } from './Usuario/profile/profile.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: FormularioRegistroComponent },
  { path: 'login', component: FormularioLoginComponent },
  { path: 'profesores', component: ListProfComponent, canActivate: [GuardGuard] },
  { path: 'user/:id', component: ProfileComponent, canActivate: [GuardGuard] },
  { path: 'update', component: ProfileComponent, canActivate: [GuardGuard] },
  { path: 'list', component: ListProfComponent, canActivate: [GuardGuard] },
  { path: 'changepw', component: ChangePasswordComponent, canActivate: [GuardGuard] },
  { path: 'changeimg', component: ChangeImgProfileComponent, canActivate: [GuardGuard] },
  { path: 'formteacher', component: FormularioProfesorComponent, canActivate: [GuardGuard] },
  { path: 'help', component: AyudaComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
