import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  isLogged = false;
  fechaInicio: string;

  constructor(private educacionS: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
    );
  }

  delete(id?: number): void {
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.educacionS.delete(id).subscribe(
            data => {
              Swal.fire("Muy bien!", "Educación eliminada", "success");
              this.cargarEducacion();
            },
            err => {
              Swal.fire("Error", "Error al eliminar la educación", "error");
            }
          );
        }
      });
    }
  }
}

