import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client";

@Injectable({
    providedIn:'root'
})

export class ClientService {
    private urlBase = "http://localhost:8080/api/Client";
  
    constructor(private clienteHttp: HttpClient) { }
    
    obtenerClientesLista():Observable<Client[]>{
      return this.clienteHttp.get<Client[]>(`${this.urlBase}/all`);
    }
    
    agregarCliente(client: Client):Observable<Object>{
      return this.clienteHttp.post(`${this.urlBase}/save`, client);
    }
  
    obtenerCliente(id: number){
      return this.clienteHttp.get<Client>(`${this.urlBase}/${id}`)
    }
    actualizarCliente(id:number, client: Client):Observable<Object>{
      return this.clienteHttp.put(`${this.urlBase}/update/${id}`, client);
    }
    eliminarCliente(id:number):Observable<Object>{
      return this.clienteHttp.delete(`${this.urlBase}/delete/${id}`);
    }    
}
