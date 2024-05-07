import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-lista',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './room-lista.component.html'  
})
export class RoomListaComponent {
  room: Room[];
  
  constructor(private roomServicio: RoomService, private enrutador: Router){
    
  }

  ngOnInit(){
    //Cargamos los cuartos
    this.obtenerCuartos();        
    
  }

  private obtenerCuartos(){
    //Consumir los datos del observable (subscribirnos)
    this.roomServicio.obtenerCuartosLista().subscribe(
      (datos=>{
        this.room = datos;        
      })
    );
  }

  public editarCuarto(id: number){
    this.enrutador.navigate(['editar-room',id])
  }
  public eliminarCuarto(id: number){
    this.roomServicio.eliminarCuarto(id).subscribe(
      {next:(datos)=>this.obtenerCuartos(),
        error:(errores)=>console.log(errores)
      }
    )
  }
}
