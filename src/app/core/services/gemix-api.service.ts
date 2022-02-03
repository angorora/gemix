import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bonus } from '../interfaces/bonus/bonus-interfaces';
@Injectable({
  providedIn: 'root',
})
export class GemixApiService {
  private dataURL = 'assets/data/data.json';
  constructor(private http: HttpClient) {}

  public getBonusData(): Observable<Bonus> {
    return this.http.get(this.dataURL).pipe(
      map((game) => game['bonus']),
      catchError((e) =>{
        console.log('An Error occurred while getting bouses', e);
        throw new Error(e)
      })
    );
  }
}
