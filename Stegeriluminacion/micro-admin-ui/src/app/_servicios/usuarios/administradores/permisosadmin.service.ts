import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Respuesta } from '../../../_dto/_main/Respuesta.Dto';

@Injectable({
  providedIn: 'root'
})
export class PermisosAdminService {

  private obtenerTodosUrl: string = `${environment.host}/${environment.micro_usuarios.base}/${environment.micro_usuarios.get.obtenerPermisosAdmin}`;

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.obtenerTodosUrl}`);
  }


}
