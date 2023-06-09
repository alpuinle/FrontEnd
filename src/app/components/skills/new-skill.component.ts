import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    if (this.porcentaje > 100) {
      Swal.fire('Alerta', 'El porcentaje no puede ser mayor a 100%', 'warning');
      return;
    }

    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      data => {
        Swal.fire('Muy bien!', 'Skill creada correctamente', 'success');
        this.router.navigate(['']);
      },
      err => {
        Swal.fire('Error', 'Error al agregar la skill', 'error');
        this.router.navigate(['']);
      }
    );
  }
}
