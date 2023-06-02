import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditExperienciaComponent } from "./components/experiencia/edit-experiencia.component";
import { NewExperienciaComponent } from "./components/experiencia/new-experiencia.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterModule, Routes } from '@angular/router';
import { NewSkillComponent } from "./components/skills/new-skill.component";
import { EditSkillComponent } from "./components/skills/edit-skill.component";
import { NewEducacionComponent } from "./components/educacion/new-educacion.component";
import { EditEducacionComponent } from "./components/educacion/edit-educacion.component";
import { EditAcercaDeComponent } from "./components/acerca-de/edit-acerca-de.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
