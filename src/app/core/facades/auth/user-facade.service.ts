import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromAppRoot from "@root/core/store/reducer.index";
import { AuthenticateModel } from "@models/security/authenticate.model";
import { UserModel } from "@models/user.model";
import { AuthActions } from "@root/core/store/actions.index";

@Injectable({
    providedIn: "root",
})
export class UserFacadeService {
    constructor(private store: Store<fromAppRoot.State>) {}

    
}
