import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/presona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;
  constructor(private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        Swal.fire("Error", "Error al modificar persona", "error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        Swal.fire("Muy bien!","Persona actualizada", "success");
        this.router.navigate(['']);
      }, err => {
        Swal.fire("Error", "Error al modificar persona", "error");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name)
  }

}
