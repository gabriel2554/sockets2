import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usuariosActivosObs: Observable<any>;

  constructor(
    public chats: ChatService
  ) { }

  ngOnInit(): void {
    this.usuariosActivosObs = this.chats.getusuariosActivos();

    // EMITIR EL OBTENER USUARIOS
    this.chats.emitirUsuariosActivos();
  }

}
