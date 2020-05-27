import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nombre = '';

  constructor(
    public wsService: WebSocketService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ingresar(){

    this.wsService.loginWs(this.nombre)
    .then( () => {

      this.router.navigateByUrl('/mensajes');
    });

    // console.log(this.nombre);
  }
}
