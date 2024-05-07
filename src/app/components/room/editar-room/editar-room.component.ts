import { Component } from '@angular/core';
import { Room } from '../../../models/room';
import { RoomService } from '../../../services/room-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-room.component.html',
})
export class EditarRoomComponent {
  room: Room = new Room();
  category: Category[];
  id: number;

  constructor(
    private roomServicio: RoomService,
    private ruta: ActivatedRoute,
    private enrutador: Router,
    private categoriaServicio: CategoryService
  ) {}

  ngOnInit() {
    this.obtenerCategorias(); // Cargar las categorías disponibles

    this.id = this.ruta.snapshot.params['id'];
    this.roomServicio.obtenerCuarto(this.id).subscribe({
      next: (datos) => (this.room = datos),
      error: (erroes: any) => console.log(erroes),
    });
  }

  private obtenerCategorias() {
    //Consumir los datos del observable (subscribirnos)
    this.categoriaServicio.obtenerCategoriasLista().subscribe({
      next: (categorias: Category[]) => {
        this.category = categorias;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onSubmit() {
    this.actualizarRoom();
  }

  actualizarRoom() {
    this.roomServicio.actualizarCuarto(this.id, this.room).subscribe({
      next: (datos) => {
        this.irListaCuartos();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  irListaCuartos() {
    this.enrutador.navigate(['/rooms']);
  }
}
