import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get(`${environment.URLapi}/usuarios`);
  }
  salvaProduto(produto: any) {
    return this.httpClient.post(`${environment.URLapi}/usuario`, produto);
  }
  find(id: any): Observable<any> {

    return this.httpClient.get(`${environment.URLapi}/usuario/${ id }`);
  }
  update(id: any, data: any): Observable<any> {

    return this.httpClient.put<any>(`${environment.URLapi}/usuario/${ id }`, data);
  }

  destroy(id: any): Observable<any> {

    return this.httpClient.delete<any>(`${environment.URLapi}/usuario/${ id }`);
  }

  login(dados: any){
    return this.httpClient.post(`${environment.URLapi}/login`,dados);

  }
}
