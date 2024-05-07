import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation';
import { Client } from '../../../models/client';
import { Room } from '../../../models/room';
import { ReservationService } from '../../../services/reservation-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client-service';
import { RoomService } from '../../../services/room-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-reservation.component.html',
})
export class EditarReservationComponent {
  reservation: Reservation = new Reservation();
  clients: Client[];
  rooms: Room[];

  id: number;

  constructor(
    private reservationServicio: ReservationService,
    private clientServicio: ClientService,
    private roomServicio: RoomService,
    private ruta: ActivatedRoute,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.obtenerClientes(), // Cargar las clientes disponibles
    this.obtenerCuartos(); // Cargar las cuartos disponibles

    this.id = this.ruta.snapshot.params['id'];
    this.reservationServicio.obtenerReservacion(this.id).subscribe({
      next: (datos) => (this.reservation = datos),
      error: (errores: any) => console.log(errores),
    });
  }

  onSubmit() {
    this.actualizarReservation();
  }

  private obtenerClientes() {
    //Consumir los datos del observable (subscribirnos)
    this.clientServicio.obtenerClientesLista().subscribe({
      next: (clientes: Client[]) => {
        this.clients = clientes;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  private obtenerCuartos() {
    //Consumir los datos del observable (subscribirnos)
    this.roomServicio.obtenerCuartosLista().subscribe({
      next: (cuartos: Room[]) => {
        this.rooms = cuartos;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  actualizarReservation() {
    this.reservationServicio
      .actualizarReservacion(this.id, this.reservation)
      .subscribe({
        next: (datos) => {
          this.irListaReservaciones();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

  irListaReservaciones() {
    this.enrutador.navigate(['/reservations']);
  }
}
