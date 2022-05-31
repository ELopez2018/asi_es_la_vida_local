
import { Component, Injectable, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { UtilsService } from "../utilities/utils.service";



@Component({
    selector: "app-loading",
    templateUrl: "./loading.component.html",
    styleUrls: ["./loading.component.scss"],
})
@Injectable()
export class LoadingComponent {
    constructor(private utilsService: UtilsService) {
        this.utilsService.loading$.subscribe((DATA) => (this.ver = DATA));
    }
    public ver = false;
    color: ThemePalette = "primary";
    mode: ProgressSpinnerMode = "indeterminate";
    value = 5000;
}
