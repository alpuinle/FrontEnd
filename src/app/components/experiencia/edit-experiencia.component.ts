import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
expLab : Experiencia = null;
fechaFinValida: boolean = true; // Variable para verificar la validez de la fecha de fin
errorFechaFin: string = ''; // Mensaje de error de la fecha de fin

  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) =>{
        this.expLab = data;
        this.validarFechaFin(); // Validar la fecha de fin al cargar el componente
  }, (err) =>{
    Swal.fire("Error al modificar experiencia")
      this.router.navigate(['']);
  }
    )
}

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  if (!this.fechaFinValida) {
    Swal.fire("Error", "La fecha de fin no puede ser anterior a la fecha de inicio", "error");
    return;
  }
  
    this.sExperiencia.update(id, this.expLab).subscribe(
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
  if (this.expLab.fechaInicio && this.expLab.fechaFin) {
    this.fechaFinValida = new Date(this.expLab.fechaFin) >= new Date(this.expLab.fechaInicio);
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
