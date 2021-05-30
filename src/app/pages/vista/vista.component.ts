import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';
import { Disco } from 'src/app/models/disco';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public discosVista : Disco[];

  constructor(private apiService: DiscoService) {
    this.discosVista = this.apiService.obtenerDiscos();
   }

  mostrarDiscos(id: string): void {
    if(id === undefined) {
      this.discosVista = this.apiService.obtenerDiscos();
    } else {
      this.discosVista = this.apiService.obtenerDisco(id);
    }
  }

  ngOnInit(): void {
  }

}
