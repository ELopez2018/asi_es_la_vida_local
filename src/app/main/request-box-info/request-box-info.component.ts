import { Component, OnInit } from '@angular/core';
import { RequestModel } from '@models/request.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { MessageService } from '@services/message.service';
import { Subscription } from 'rxjs';
import { RequestFacadeService } from '../requests/request-facade.service';

@Component({
  selector: 'app-request-box-info',
  templateUrl: './request-box-info.component.html',
  styleUrls: ['./request-box-info.component.scss'],
})
export class RequestBoxInfoComponent implements OnInit {
  requestAll: RequestModel[] | null = [];
  subs: Subscription = new Subscription();
  reqTodas: number | null = 0;
  reqPorAtender: number = 0;
  reqPorAsignar: number = 0;
  reqTAsignadas: number = 0;
  constructor(
    private reqFacade: RequestFacadeService,
    private messageService: MessageService,
    private utilsService: UtilsService
  ) {}

  ngOnInit(): void {
    this.utilsService.loading(false);
    this.reqFacade.searchAllRequest();
    this.subcripciones();
  }

  subcripciones() {
    let sub: Subscription = this.reqFacade
      .getAllRequest$()
      .subscribe((requestAll) => {
        this.requestAll = requestAll;
        if (this.requestAll && this.requestAll.length > 0) {
          this.reqTodas = this.requestAll.length;
          this.reqPorAtender = 0;
          this.requestAll.forEach((items) => {
            switch (items.request_state_id) {
              case 1:
                this.reqPorAtender++;
                break;
              case 2:
                this.reqPorAsignar++;
                break;
              case 3:
                this.reqTAsignadas++;
                break;
            }
          });
        } else {
          this.reqTodas = 0;
        }
      });
    this.subs.add(sub);

    let sub2: Subscription = this.reqFacade.loading$().subscribe((loading) => {
      this.utilsService.loading(loading);
    });
    this.subs.add(sub2);
  }
  // mensaje(type: number) {
  //   switch (type) {
  //     case 1:
  //       this.messageService.showCustom('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit quis fuga illum atque inventore consequatur recusandae, et minus tempore voluptate distinctio eos exercitationem repellendus harum sequi sint deserunt rerum?o', null, 'success');
  //       break;
  //     case 2:
  //       this.messageService.showCustom('Lorem ', null, 'error');
  //       break;
  //     case 3:
  //       this.messageService.showCustom('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit quis fuga illum atque inventore consequatur recusandae, et minus tempore voluptate distinctio eos exercitationem repellendus harum sequi sint deserunt rerum?', null, 'warn');
  //       break;
  //   }
  //   this.utilsService.loading()
  // }
}
