import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Automovil } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private aURL = 'https://catalogo-autos-nodejs.herokuapp.com/api/autos';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.aURL);
  }

  addAutos(auto: Automovil): Observable<any>{
      return this.http.post<any>(`${this.aURL}`,auto);
  }
  
  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.aURL}/${auto._id}`, auto);
  }

  deleteAuto(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.aURL}/${auto._id}`);
  }
}
