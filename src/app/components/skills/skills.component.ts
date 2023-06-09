import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private skillS: SkillService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillS.lista().subscribe(
      data => {
        this.skill = data;
        this.validarPorcentaje();
      }
    );
  }

  validarPorcentaje(): void {
    for (const skillItem of this.skill) {
      if (skillItem.porcentaje > 100) {
        Swal.fire('Alerta', 'El porcentaje no puede ser mayor a 100%', 'warning');
      }
    }
  }

  delete(id: number): void {
    if (id !== undefined) {
      Swal.fire({
        title: 'Confirmar eliminación',
        text: '¿Estás seguro de que deseas eliminar esta skill?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          this.skillS.delete(id).subscribe(
            data => {
              Swal.fire('Muy bien!', 'Skill eliminada', 'success');
              this.cargarSkills();
            },
            err => {
              Swal.fire('Error', 'Error al borrar la skill', 'error');
            }
          );
        }
      });
    }
  }
}
