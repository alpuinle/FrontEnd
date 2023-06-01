import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/presona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://portfolio-alpuinle.onrender.com/personas/';
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.URL+ 'traer/perfil');
  }
}
