import { Injectable } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsService: WebSocketService
  ) { }

  sendMessage( mensaje: string ) {
    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje', payload);
  }
  getMessage(){
    return this.wsService.listen('mensaje-nuevo');
  }

  getmessagesPrivate() {
    return this.wsService.listen( 'mensaje-privado' );
  }

  getusuariosActivos() {
    return this.wsService.listen( 'usuarios-activos');
  }

  emitirUsuariosActivos() {
    this.wsService.emit('obtener-usuarios');
  }
}
