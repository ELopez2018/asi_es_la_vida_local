import { UserMock } from './../core/mocks/user.mock';
import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '@facades/auth/user-facade.service';
import { User } from '@interfaces/user.interface';
import { AuthFacadeService } from '@root/auth/login/auth.facade.service';
import { LocalStorageService } from '@services/local-storage.service';
declare function customInitFunctions(): any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user!: User;
  constructor(
    private localStorageService: LocalStorageService,
    private userFacade: AuthFacadeService
  ) {}

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('user');
    if (this.user !== null) {
      this.userFacade.setUser(this.user);
    } else {
      this.userFacade.setUser(UserMock);
      this.localStorageService.setItem('user',UserMock)
      this.user = UserMock;
    }
    customInitFunctions();
  }
  borrarStorage() {
    localStorage.clear()
    this.userFacade.logout();
  }
}
