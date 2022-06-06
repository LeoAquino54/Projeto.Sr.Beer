import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  constructor(private httpClient: HttpClient) { }

  getEstados() {
    return this.httpClient.get(`${environment.URLapi}/estados`);
  }
  salvaProduto(produto: any) {
    return this.httpClient.post(`${environment.URLapi}/estado`, produto);
  }
  find(id: any): Observable<any> {

    return this.httpClient.get(`${environment.URLapi}/estado/${ id }`);
  }
  update(id: any, data: any): Observable<any> {

    return this.httpClient.put<any>(`${environment.URLapi}/estado/${ id }`, data);
  }

  destroy(id: any): Observable<any> {

    return this.httpClient.delete<any>(`${environment.URLapi}/estado/${ id }`);
  }
}
