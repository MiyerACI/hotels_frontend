import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-client.component.html'
  
})
export class EditarClientComponent {
  cliente: Client = new Client();
  id:number;

  constructor(private clientServicio: ClientService, 
    private ruta:ActivatedRoute,
    private enrutador: Router ){}

    ngOnInit(){
      this.id = this.ruta.snapshot.params['id'];
      this.clientServicio.obtenerCliente(this.id).subscribe({
        next: (datos) => this.cliente = datos,
        error:(erroes:any)=> console.log(erroes)
      });
    }

    onSubmit(){
      this.actualizarCliente();
    }

    actualizarCliente(){
      this.clientServicio.actualizarCliente(this.id, this.cliente).subscribe({
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
