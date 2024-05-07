import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room-service';
import { Router } from '@angular/router';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';


@Component({
  selector: 'app-agregar-room',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './agregar-room.component.html'
})
export class AgregarRoomComponent{  
  room : Room = new Room();
  category:  Category[]=[];

  constructor(private roomServicio: RoomService, private categoryServicio:CategoryService , private enrutador: Router){

  };
  ngOnInit(){
    //Cargamos las categorias
    this.obtenerCategorias();
  }

  onSubmit(){
    this.guardarRoom();
  }

  private obtenerCategorias() {
    //Consumir los datos del observable (subscribirnos)
    this.categoryServicio.obtenerCategoriasLista().subscribe(
      {
        next: (categorias: Category[]) => {          
          this.category = categorias;          
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }
  guardarRoom(){
    this.roomServicio.agregarCuarto(this.room).subscribe({
      next:(datos)=>{
        console.log(datos);
        this.irListaRooms();
      },error:(error:any)=>{console.log(error)}      
    }
    );
  }

  irListaRooms(){
    this.enrutador.navigate(['/rooms'])
  }
}
