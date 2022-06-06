import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  getProdutos() {
    return this.httpClient.get(`${environment.URLapi}/produtos`);
  }
  salvaProduto(produto: any) {
    return this.httpClient.post(`${environment.URLapi}/produto`, produto);
  }
  find(id: any): Observable<any> {

    return this.httpClient.get(`${environment.URLapi}/produto/${ id }`);
  }
  update(id: any, data: any): Observable<any> {

    return this.httpClient.put<any>(`${environment.URLapi}/produto/${ id }`, data);
  }

  destroy(id: any): Observable<any> {

    return this.httpClient.delete<any>(`${environment.URLapi}/produto/${ id }`);
  }
}
