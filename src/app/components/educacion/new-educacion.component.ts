import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router) { }

  ngOnInit(): void {
    
  }


   onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe(
      data =>{
        Swal.fire("Muy bien!","Educación añadida exitosamente", "success");
        this.router.navigate(['']);
      }, err => {
        Swal.fire("Error", "Error al agregar la educación", "error");
        this.router.navigate(['']);
      }
    )
    }

}
