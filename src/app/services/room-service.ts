import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Room } from "../models/room";

@Injectable({
    providedIn: 'root'
})

export class RoomService {
    private urlBase = "http://localhost:8080/api/Room";
  
    constructor(private clienteHttp: HttpClient) { }
    
    obtenerCuartosLista():Observable<Room[]>{
      return this.clienteHttp.get<Room[]>(`${this.urlBase}/all`);
    }
    
    agregarCuarto(room: Room):Observable<Object>{
      console.log(room);
      return this.clienteHttp.post(`${this.urlBase}/save`, room);
    }
  
    obtenerCuarto(id: number){
      return this.clienteHttp.get<Room>(`${this.urlBase}/${id}`)
    }
    actualizarCuarto(id:number, room: Room):Observable<Object>{
      return this.clienteHttp.put(`${this.urlBase}/update/${id}`, room);
    }
    eliminarCuarto(id:number):Observable<Object>{
      return this.clienteHttp.delete(`${this.urlBase}/delete/${id}`);
    }

}
