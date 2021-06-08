import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './Home/main/main.component';
import { HeaderComponent } from './home/header/header.component';
import { FormularioRegistroComponent } from './formulario/formulario-registro/formulario-registro.component';
import { FormularioLoginComponent } from './formulario/formulario-login/formulario-login.component';
import { ProfileComponent } from './Usuario/profile/profile.component';
import { MapaComponent } from './mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    FormularioRegistroComponent,
    FormularioLoginComponent,
    ProfileComponent,
    MapaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoe3vvdGGosbpLVZqUncQDgiW4UAbl58'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
