import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private httpClient: HttpClient) { }

  getCidades() {
    return this.httpClient.get(`${environment.URLapi}/cidades`);
  }
  salvaProduto(produto: any) {
    return this.httpClient.post(`${environment.URLapi}/cidade`, produto);
  }
  find(id: any): Observable<any> {

    return this.httpClient.get(`${environment.URLapi}/cidade/${ id }`);
  }
  update(id: any, data: any): Observable<any> {

    return this.httpClient.put<any>(`${environment.URLapi}/cidade/${ id }`, data);
  }

  destroy(id: any): Observable<any> {

    return this.httpClient.delete<any>(`${environment.URLapi}/cidade/${ id }`);
  }
}
