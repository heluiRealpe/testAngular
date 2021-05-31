import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Disco } from 'src/app/models/disco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url = 'http://localhost:3000/discos';
  public discos: Disco[];

  constructor(private http: HttpClient) {
    this.discos = [];
   }

  obtenerDiscos(): Observable<any> {
    return this.http.get(this.url);
  }

  obtenerDisco(id: string): Observable<any> {
    return this.http.get(`${this.url}?id=${id}`);
  }

  añadirDisco(disco: Disco): any {
    return this.http.post(this.url, disco).subscribe( (result: any) => {
      console.log(result);
    });
  }

  actualizarDisco(disco: Disco): any {
    return this.http.put(this.url, disco).subscribe( (result: any) => {
      console.table(result);
    });
  }

  borrarDisco(id: string): any {
    // return this.http.delete(this.url, { headers: new HttpHeaders({'Content-Type': 'application/json'}), body: { id: id}}).subscribe( (result: any) => {
    //   console.table(result);
    // });
    // return this.http.delete(`${this.url}?id=${id}`, ).subscribe( (result: any) => {
    //   console.table(result);
    // });
  }

}
