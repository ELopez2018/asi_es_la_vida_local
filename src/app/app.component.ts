import { Component } from '@angular/core';
declare function customInitFunctions(): any;
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MAV';
  langs: string[] = [];
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    this.langs = this.translate.getLangs();
    customInitFunctions();
  }
}
