import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(
    private skillS: SkillService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        Swal.fire('Error', 'Error al modificar', 'error');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    if (this.skill.porcentaje > 100) {
      Swal.fire('Alerta', 'El porcentaje no puede ser mayor a 100%', 'warning');
      return;
    }

    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      (data) => {
        Swal.fire('Muy bien!', 'Skill actualizada', 'success');
        this.router.navigate(['']);
      },
      (err) => {
        Swal.fire('Error', 'Error al modificar la skill', 'error');
        this.router.navigate(['']);
      }
    );
  }
}

