import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {AllUserData} from "../../../shared/to/all-user-data";

@Injectable()
export class ThreadsService {

  constructor(private _http: Http) { }

  loadAllUserData(): Observable<AllUserData> {
    return this._http.get('/api/threads')
      .map(res => res.json());
  }

}