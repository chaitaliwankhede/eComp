import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSharedService {

  constructor(private httpClient:HttpClient) { }

   // GET
   getAll(apiURL: string, isLoader = false){
    return this.httpClient.get(apiURL).pipe(map((res: any) => {
       return res;
    }))
  }
}
