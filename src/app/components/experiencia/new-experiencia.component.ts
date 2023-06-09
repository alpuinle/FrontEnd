import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  fechaInicio: string;
  fechaFin: string;
  fechaFinValida: boolean = true; // Variable para verificar la validez de la fecha de fin

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.fechaInicio, this.fechaFin);
    if (!this.fechaFinValida) {
      Swal.fire("Error", "La fecha de fin no puede ser anterior a la fecha de inicio", "error");
      return;
    }
    this.sExperiencia.save(expe).subscribe(
      data => {
        Swal.fire("Muy bien!", "Experiencia añadida exitosamente", "success");
        this.router.navigate(['']);
      },
      err => {
        Swal.fire("Error", "Error al agregar la experiencia", "error");
        this.router.navigate(['']);
      }
    );
  }

  validarFechaFin(): void {
    if (this.fechaInicio && this.fechaFin) {
      this.fechaFinValida = new Date(this.fechaFin) >= new Date(this.fechaInicio);
    }
  }
}
