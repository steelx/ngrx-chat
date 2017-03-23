import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {AllUserData} from "../../../shared/to/all-user-data";
import {commonHttpHeaders} from "./commonHttpHeaders";

@Injectable()
export class ThreadsService {

  constructor(private _http: Http) { }

  loadAllUserData(userId:number = 1): Observable<AllUserData> {
    return this._http.get('/api/threads', commonHttpHeaders(userId))
      .map(res => res.json());
  }

}