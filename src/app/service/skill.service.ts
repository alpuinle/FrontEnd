import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skillURL = 'https://portfolio-alpuinle.onrender.com/skill/';

  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'lista');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.skillURL + `delete/${id}`);
  }
}
