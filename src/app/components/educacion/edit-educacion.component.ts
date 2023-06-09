import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  fechaFinValida: boolean = true; // Variable para verificar la validez de la fecha de fin
  errorFechaFin: string = ''; // Mensaje de error de la fecha de fin

  constructor(
    private educacionS: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
        this.validarFechaFin(); // Validar la fecha de fin al cargar el componente
      },
      err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if (!this.fechaFinValida) {
      Swal.fire("Error", "La fecha de fin no puede ser anterior a la fecha de inicio", "error");
      return;
    }this.educacionS.update(id, this.educacion).subscribe(
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

  validarFechaFin(): void {
    if (this.educacion.fechaInicio && this.educacion.fechaFin) {
      this.fechaFinValida = new Date(this.educacion.fechaFin) >= new Date(this.educacion.fechaInicio);
      this.errorFechaFin = this.fechaFinValida ? '' : "La fecha de fin no puede ser anterior a la fecha de inicio";
    } else {
      this.fechaFinValida = true; // Restaurar la validez si falta alguna fecha
      this.errorFechaFin = '';
    }
  }

  goBack(): void {
    this.router.navigate(['']); // Cambia 'ruta-de-vuelta' por la ruta a la que deseas regresar
  }
}
