import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComercioService {

  constructor(private httpClient: HttpClient) { }

  getComercios() {
    return this.httpClient.get(`${environment.URLapi}/comercio`);
  }
  salvaComercio(produto: any) {
    return this.httpClient.post(`${environment.URLapi}/comercio`, produto);
  }
  find(id: any): Observable<any> {

    return this.httpClient.get(`${environment.URLapi}/comercio/${ id }`);
  }
  update(id: any, data: any): Observable<any> {

    return this.httpClient.put<any>(`${environment.URLapi}/comercio/${ id }`, data);
  }

  destroy(id: any): Observable<any> {

    return this.httpClient.delete<any>(`${environment.URLapi}/comercio/${ id }`);
  }
}