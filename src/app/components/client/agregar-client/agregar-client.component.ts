import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-client.component.html'  
})
export class AgregarClientComponent {
  cliente : Client = new Client();

  constructor(private clienteServicio: ClientService, private enrutador: Router){

  };

  onSubmit(){
    this.guardarCliente();
  }
  guardarCliente(){
    this.clienteServicio.agregarCliente(this.cliente).subscribe({
      next:(datos)=>{
        this.irListaClientes();
      },error:(error:any)=>{console.log(error)}      
    }
    );
  }

  irListaClientes(){
    this.enrutador.navigate(['/clients'])
  }
}
