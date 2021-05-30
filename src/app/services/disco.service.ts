import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disco } from 'src/app/models/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url = 'http://localhost:3000/discos';
  public discos: Disco[];

  constructor(private http: HttpClient) {
    this.discos = [];
   }

  obtenerDiscos(): any {
    this.http.get(this.url).subscribe( (result: any) => {
      this.discos = result;
      console.table(result);
      return this.discos;
    });
  }

  obtenerDisco(id: string): any {
    this.http.get(`${this.url}?id=${id}`).subscribe( (result: any) => {
      this.discos = result;
      console.table(result);
      return this.discos;
    });
  }

  añadirDisco(disco: Disco): any {
    return this.http.post(this.url, disco).subscribe( (result: any) => {
      this.discos.push(result);
    });
  }

  actualizarDisco(disco: Disco): any {
    return this.http.put(this.url, disco).subscribe( (result: any) => {
      console.table(result);
    });
  }

  borrarDisco(id: string): any {
    return this.http.delete(`${this.url}?id=${id}`).subscribe( (result: any) => {
      console.table(result);
    });
  }

}
