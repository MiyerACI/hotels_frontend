import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Reservation } from "../models/reservation";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ReservationService {
    private urlBase = "http://localhost:8080/api/Reservation";
  
    constructor(private clienteHttp: HttpClient) { }
    
    obtenerReservacionesLista():Observable<Reservation[]>{
      return this.clienteHttp.get<Reservation[]>(`${this.urlBase}/all`);
    }
    
    agregarReservacion(reservation: Reservation):Observable<Object>{            
      return this.clienteHttp.post(`${this.urlBase}/save`, reservation);
    }
   
    obtenerReservacion(id: number){
      return this.clienteHttp.get<Reservation>(`${this.urlBase}/${id}`)
    }
    actualizarReservacion(id:number, reservation: Reservation):Observable<Object>{
      return this.clienteHttp.put(`${this.urlBase}/update/${id}`, reservation);
    }
    eliminarReservacion(id:number):Observable<Object>{
      return this.clienteHttp.delete(`${this.urlBase}/delete/${id}`);
    }
}
