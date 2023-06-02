import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgCircleProgressModule } from "ng-circle-progress";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { BannerComponent } from "./components/banner/banner.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { ExperienciaComponent } from "./components/experiencia/experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoArgProgComponent } from "./components/logo-arg-prog/logo-arg-prog.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { interceptorProvider } from "./service/interceptor-service";
import { FormsModule } from '@angular/forms';

import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from "./components/skills/edit-skill.component";
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()) 
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
