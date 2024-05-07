import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
  private urlBase = "http://localhost:8080/api/Category";
  
  constructor(private clienteHttp: HttpClient) { }
  
  obtenerCategoriasLista():Observable<Category[]>{
    return this.clienteHttp.get<Category[]>(`${this.urlBase}/all`);
  }
  
  agregarCategoria(category: Category):Observable<Object>{
    return this.clienteHttp.post(`${this.urlBase}/save`, category);
  }

  obtenerCategoria(id: number){
    return this.clienteHttp.get<Category>(`${this.urlBase}/${id}`)
  }
  actualizarCategoria(id:number, category: Category):Observable<Object>{
    return this.clienteHttp.put(`${this.urlBase}/update/${id}`, category);
  }
  eliminarCategoria(id:number):Observable<Object>{
    return this.clienteHttp.delete(`${this.urlBase}/delete/${id}`);
  }
}
