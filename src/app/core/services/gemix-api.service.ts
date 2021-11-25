import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GemixApiService {
   private dataURL = 'assets/data/data.json';
  constructor(private http: HttpClient) { }

  public getBonusData(){
    return this.http.get(this.dataURL)
    .pipe(map(game => game['bonus']));
  }
}
