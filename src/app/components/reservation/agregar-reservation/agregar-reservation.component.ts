import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../../services/reservation-service';
import { ClientService } from '../../../services/client-service';
import { RoomService } from '../../../services/room-service';
import { Router } from '@angular/router';
import { Client } from '../../../models/client';
import { Room } from '../../../models/room';
import { Reservation } from '../../../models/reservation';

@Component({
  selector: 'app-agregar-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-reservation.component.html',
})
export class AgregarReservationComponent {
  reservation: Reservation = new Reservation();

  client: Client[] = [];
  room: Room[] = [];

  constructor(
    private reservationServicio: ReservationService,
    private clientServicio: ClientService,
    private roomServicio: RoomService,  
    private enrutador: Router
  ) { }

  ngOnInit() {
    //Cargamos los Clientes
    this.obtenerClientes();
    //Cargamos los Cuartos
    this.obtenerCuartos();
  }

  onSubmit() {
    this.guardarReservation();
  }

  private obtenerClientes() {
    //Para Consumir los datos del observable debemos (subscribirnos)
    this.clientServicio.obtenerClientesLista().subscribe({
      next: (clientes: Client[]) => {
        this.client = clientes;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  private obtenerCuartos() {
    //Consumir los datos del observable debemos (subscribirnos)
    this.roomServicio.obtenerCuartosLista().subscribe({
      next: (cuartos: Room[]) => {
        this.room = cuartos;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  guardarReservation() {
    
    this.reservationServicio.agregarReservacion(this.reservation).subscribe({
      next: (datos) => {
        console.log(datos);
        this.irListaReservations();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  irListaReservations() {
    this.enrutador.navigate(['/reservations']);
  }
}
