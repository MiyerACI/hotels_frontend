import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../../models/message';
import { Client } from '../../../models/client';
import { Room } from '../../../models/room';
import { MessageService } from '../../../services/message-service';
import { ClientService } from '../../../services/client-service';
import { RoomService } from '../../../services/room-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-message.component.html'  
})

export class AgregarMessageComponent {
  message: Message = new Message();

  client: Client[] = [];
  room: Room[] = [];

  constructor(
    private messageServicio: MessageService,
    private clientServicio: ClientService,
    private roomServicio: RoomService,  
    private enrutador: Router
  ) { }

  ngOnInit() {
    //Cargamos los Clientes
    this.obtenerClientes();
    //Cargamos los Cuartos
    this.obtenerCuartos();
  }

  onSubmit() {
    this.guardarMessage();
  }

  private obtenerClientes() {
    //Para Consumir los datos del observable debemos (subscribirnos)
    this.clientServicio.obtenerClientesLista().subscribe({
      next: (clientes: Client[]) => {
        this.client = clientes;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  private obtenerCuartos() {
    //Consumir los datos del observable debemos (subscribirnos)
    this.roomServicio.obtenerCuartosLista().subscribe({
      next: (cuartos: Room[]) => {
        this.room = cuartos;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  guardarMessage() {
    
    this.messageServicio.agregarMensaje(this.message).subscribe({      
      next: (datos) => {
        console.log(datos);
        this.irListaMessage();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  irListaMessage() {
    this.enrutador.navigate(['/messages']);
  }
}
