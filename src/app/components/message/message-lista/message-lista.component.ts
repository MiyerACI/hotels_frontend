import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../../models/message';
import { MessageService } from '../../../services/message-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-lista.component.html',
})
export class MessageListaComponent {
  messages: Message[];

  constructor(
    private messageServicio: MessageService,
    private enrutador: Router
  ) {}

  ngOnInit() {
    this.obtenerMensajes();
  }

  private obtenerMensajes() {
    this.messageServicio.obtenerMensajesLista().subscribe((datos) => {
      console.log(datos);
      this.messages = datos;
    });
  }
  public editarMessages(id: number){
    this.enrutador.navigate(['editar-message', id])
  }
  public eliminarMessage(id: number){
    this.messageServicio.eliminarMensaje(id).subscribe({
      next: (datos)=>this.obtenerMensajes(),
      error: (errores)=> console.log(errores)
    })
  }
}
