import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';
import { Disco } from 'src/app/models/disco';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private apiService: DiscoService) { }

  anyadirDisco(id: string, titulo: string, interprete: string, anyoPublicacion: string): void {
    let discoNew = new Disco(id, titulo, interprete, anyoPublicacion);
    console.log(discoNew);
    this.apiService.añadirDisco(discoNew);
  }

  editDisco(id: string, titulo: string, interprete: string, anyoPublicacion: string): void {
    let discoMod = new Disco(id, titulo, interprete, anyoPublicacion);
    this.apiService.actualizarDisco(discoMod);
   }

   eraseDisco(id: string, titulo: string, interprete: string, anyoPublicacion: string) {
     let disco = new Disco(id, titulo, interprete, anyoPublicacion)
     this.apiService.borrarDisco(disco);
   }

  ngOnInit(): void {
  }

}
