import { Observable } from 'rxjs';
import { ApiActionModel } from '../models/api-action-model';


export interface ApiServiceInterface<T> {
    create$(action: ApiActionModel<T>): Observable<T>;
    searchAll$(action: ApiActionModel<T>): Observable<T[]>;
    search$(action: ApiActionModel<T>): Observable<T>;
    update$(action: ApiActionModel<T>): Observable<T>;
    delete$(action: ApiActionModel<T>): Observable<{}>;
    upload$(action: ApiActionModel<File>): Observable<string>;
}
