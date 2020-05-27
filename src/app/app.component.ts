import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

constructor(
    public wsService: WebSocketService,
    // tslint:disable-next-line: no-shadowed-variable
    public ChatService: ChatService
    ) {}

ngOnInit() {

  this.ChatService.getmessagesPrivate().subscribe( msg  => {
    console.log(msg);
  });
}

}
