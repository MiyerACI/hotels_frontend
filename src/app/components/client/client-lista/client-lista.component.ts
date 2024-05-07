import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-lista',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './client-lista.component.html'  
})
export class ClientListaComponent {
  client: Client[];

  constructor(private clientServicio: ClientService, private enrutador: Router){
    
  }

  ngOnInit(){
    //Cargamos los clientes
    this.obtenerClientes();
  }
  private obtenerClientes(){
    //Consumir los datos del observable (subscribirnos)
    this.clientServicio.obtenerClientesLista().subscribe(
      (datos=>{
        this.client = datos;
      })
    );
  }
  public editarCliente(id: number){
    this.enrutador.navigate(['editar-client',id])
  }
  public eliminarCliente(id: number){
    this.clientServicio.eliminarCliente(id).subscribe(
      {next:(datos)=>this.obtenerClientes(),
        error:(errores)=>console.log(errores)
      }
    )
  }
}
