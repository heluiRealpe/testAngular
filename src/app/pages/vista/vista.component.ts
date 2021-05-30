import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';
import { Disco } from 'src/app/models/disco';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public discosVista: Disco[];

  constructor(private apiService: DiscoService) {
    this.discosVista = [];
    this.apiService.obtenerDiscos().subscribe( (result: Disco[]) => {
      this.discosVista = result;
      });
   }

  mostrarDiscos(id: string): void {
    if(id == undefined) {
      this.apiService.obtenerDiscos().subscribe( (result: Disco[]) => {
        this.discosVista = result;
        });
    } else {
      this.apiService.obtenerDisco(id).subscribe( (result: Disco[]) => {
        this.discosVista = result;
        });
    }
  }

  ngOnInit(): void {
  }

}
