import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ReadjsonService {


  constructor(private http: HttpClient) { }

  getData(): Observable<Array<any>> {
    return this.http.get<Array<any>>('./assets/api/data.json');
  }

}
