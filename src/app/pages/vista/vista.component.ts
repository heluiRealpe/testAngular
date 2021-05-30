import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/services/disco.service';
import { Disco } from 'src/app/models/disco';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public discos: Disco[];

  constructor(private apiService: DiscoService) {
    this.discos = [];
   }

  mostrarDiscos(): void {
      this.apiService.obtenerDisco().subscribe( (result: any) => {
        this.discos = result;
        console.log(result);
      });
  }

  // mostrarDiscos(id: string): void {
  //   console.log(id);
  //   if(id == null) {
  //     this.apiService.obtenerDisco().subscribe( (result: any) => {
  //       this.discos = result;
  //       console.log(result);
  //     });
  //   } else {
  //     this.apiService.obtenerDiscos(id).subscribe( (result: any) => {
  //       this.discos = result;
  //       console.log(result);
  //     });
  //   }
  // }

  ngOnInit(): void {
  }

}
