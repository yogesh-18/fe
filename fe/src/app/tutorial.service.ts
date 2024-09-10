import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  public addTutorial(tutorial: Tutorial): Observable<Tutorial> {
    return this.httpClient.post<Tutorial>(this.url, tutorial);
  }
  private url = 'http://localhost:8080/api/tutorials';

  constructor(private httpClient:HttpClient) { }

  public getAllTutorials(){
    return this.httpClient.get(this.url);
  }


}
