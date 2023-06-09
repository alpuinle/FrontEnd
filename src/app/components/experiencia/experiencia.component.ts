import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';

import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  fechaInicio: string;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; });
  }

  delete(id?: number): void {
    if (id !== undefined) {
      Swal.fire({
        title: 'Confirmación',
        text: '¿Estás seguro de eliminar esta experiencia?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.sExperiencia.delete(id).subscribe(
            data => {
              Swal.fire("Muy bien!", "Experiencia eliminada", "success");
              this.cargarExperiencia();
            },
            err => {
              Swal.fire("Error", "No se pudo borrar la experiencia", "error");
            }
          );
        }
      });
    }
  }
}
