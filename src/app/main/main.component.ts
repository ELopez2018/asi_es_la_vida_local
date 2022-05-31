import { Component, OnInit } from '@angular/core';
import { UserFacadeService } from '@facades/auth/user-facade.service';
import { UserModel } from '@models/user.model';
import { AuthFacadeService } from '@root/auth/login/auth.facade.service';
import { LocalStorageService } from '@services/local-storage.service';
declare function customInitFunctions(): any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  user!: UserModel;
  constructor(
    private localStorageService: LocalStorageService,
    private userFacade: AuthFacadeService
  ) {}

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('user');
    if (this.user !== null) {
      this.userFacade.setUser(this.user);
    }
    customInitFunctions();
  }
  borrarStorage() {
    localStorage.clear()
    this.userFacade.logout();
  }
}
