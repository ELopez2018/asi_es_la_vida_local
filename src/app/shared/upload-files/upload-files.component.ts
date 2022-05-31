import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit {
  @Input() subTitleForm: string ="Expediente";
  constructor() { }

  ngOnInit(): void {
  }

}
