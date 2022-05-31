import { Component, OnInit } from '@angular/core';
import { AuthFacadeService } from '@root/auth/login/auth.facade.service';
import { Subscription } from 'rxjs';
import { environment } from "@environments/environment";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})

export class HeaderComponent implements OnInit {
  subs: Subscription = new Subscription();
  user: any;
  storage = environment.STORAGE;
  constructor(private authfacade: AuthFacadeService) { }
  ngOnInit(): void {
    this.obtenerUsuario()
  }
  obtenerUsuario() {
    this.authfacade.getCurrentUser$().subscribe(user => this.user = user )
  }
  logout(): void {
    this.authfacade.logout();
  }
}
