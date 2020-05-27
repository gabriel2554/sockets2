import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebSocketService } from '../services/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  constructor(

    public WsService: WebSocketService,
    private router: Router
  ) { }

  canActivate(){
    if (this.WsService.getUsuario() ) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }



  }

}
