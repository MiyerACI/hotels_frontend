import { Component } from '@angular/core';
import { ReservationService } from '../../../services/reservation-service';
import { Router } from '@angular/router';
import { Reservation } from '../../../models/reservation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-lista.component.html',
})
export class ReservationListaComponent {
  reservations: Reservation[];

  constructor(
    private reservationServicio: ReservationService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    //Cargamos las reservaciones
    this.obtenerReservaciones();
  }

  private obtenerReservaciones() {
    this.reservationServicio.obtenerReservacionesLista().subscribe((datos) => {
      console.log(datos);
      this.reservations = datos;
    });
  }

  public editarReservacion(id: number) {
    this.enrutador.navigate(['editar-reservation', id]);
  }
  public eliminarReservacion(id: number) {
    this.reservationServicio
      .eliminarReservacion(id)
      .subscribe({
        next: (datos) => this.obtenerReservaciones(),
        error: (errores) => console.log(errores)
      });
  }
}
