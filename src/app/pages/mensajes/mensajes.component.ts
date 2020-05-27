import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  constructor(
    public wsService: WebSocketService
  ) { }

  ngOnInit(): void {
  }

  salir() {
    this.wsService.logoutWS();
  }

}
