import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestModel } from '@models/request.model';
import { Subscription } from 'rxjs';
import { RequestFacadeService } from '../requests/request-facade.service';

@Component({
  selector: 'app-requests-status',
  templateUrl: './requests-status.component.html',
  styleUrls: ['./requests-status.component.scss'],
})
export class RequestsStatusComponent implements OnInit, OnDestroy {
  statusId: number | undefined;
  requestAll: RequestModel[] | null = [];
  requestsAllSelected: RequestModel[] | null = [];
  subs: Subscription = new Subscription();
  statusRequest = [
    { id: 0, description: '' },
    { id: 1, description: 'RADICADAS' },
    { id: 2, description: 'LEIDAS' },
    { id: 3, description: 'POR ASIGNAR' },
    { id: 4, description: 'ASIGNADAS' },
    { id: 5, description: 'RECIBIDA POR ASIGNADO' },
  ];
  titulo?: string ='ACTIVAS';
  constructor(
    private activatedRoute: ActivatedRoute,
    private reqFacade: RequestFacadeService
  ) {
    this.reqFacade.searchAllRequest();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.getParams();
  }
  getParams() {
    this.statusId = this.activatedRoute.snapshot.params.id;

    this.getAllRequest();
  }

  getAllRequest() {
    let sub: Subscription = this.reqFacade
      .getAllRequest$()
      .subscribe((requestAll) => {
        this.requestAll = requestAll;
        if (this.requestAll) {
          if (this.statusId === undefined) {
            this.requestsAllSelected = this.requestAll;
          } else {
            this.titulo = this.statusRequest.find(e => e.id == this.statusId)?.description
            this.requestsAllSelected = this.requestAll.filter(
              (request) => request.request_state_id == this.statusId
            );
          }
        }
      });
    this.subs.add(sub);
  }
}
