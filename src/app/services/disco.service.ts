import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disco } from 'src/app/models/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url = 'http://localhost:3000/discos';

  constructor(private http: HttpClient) { }

  obtenerDisco() {
    return this.http.get(this.url);
  }

//   obtenerDiscos(id: string) {
//     return this.http.get(`${this.url}?id=${id}`);
//   }
}
