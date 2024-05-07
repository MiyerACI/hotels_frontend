import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../models/message";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class MessageService {
    private urlBase = "http://localhost:8080/api/Message";
    constructor(private clienteHttp: HttpClient) { }
    
    obtenerMensajesLista():Observable<Message[]>{
      return this.clienteHttp.get<Message[]>(`${this.urlBase}/all`);
    }
    
    agregarMensaje(message: Message):Observable<Object>{
      console.log(message);
      return this.clienteHttp.post(`${this.urlBase}/save`, message);
    }
  
    obtenerMensaje(id: number){
      return this.clienteHttp.get<Message>(`${this.urlBase}/${id}`)
    }
    actualizarMensaje(id:number, message: Message):Observable<Object>{
      return this.clienteHttp.put(`${this.urlBase}/update/${id}`, message);
    }
    eliminarMensaje(id:number):Observable<Object>{
      return this.clienteHttp.delete(`${this.urlBase}/delete/${id}`);
    }


}
