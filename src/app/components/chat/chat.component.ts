import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';

  mensajesSubscription: Subscription;
  elemento: HTMLElement;

  mensajes: any[] = [];

  constructor(
    public Chatservice: ChatService
  ) { }

  ngOnInit(): void {

    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this.Chatservice.getMessage().subscribe( msg => {
      console.log(msg);
      this.mensajes.push(msg);
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;

      }, 50);
});

}
ngOnDestroy() {
 this.mensajesSubscription.unsubscribe();
}
enviar() {

  if ( this.texto.trim().length === 0) {
          return;
        }

  this.Chatservice.sendMessage(this.texto);
  console.log(this.texto);
  this.texto = '';
  }

}
