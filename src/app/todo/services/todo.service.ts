import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/shared/models/tarea.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  tareas: Tarea[] = [];
  url = environment.apiUrl + environment.endpoints.tareas;
  constructor(private http: HttpClient) {
    console.log('servicio todo iniciado');
  }

  agregarTarea(tarea: Tarea) {
    const url = this.url;
    return this.http.post<Tarea>(url, tarea);
  }

  obtenerTarea() {
    const url = this.url;
    return this.http.get<Tarea[]>(url);
  }

  obtenerTareaDetalle(id: number) {
    const url = this.url;
    return this.http.get<Tarea>(`${url}/${id}`);
  }

  eliminarTarea(tareaId: number) {
    const url = `${this.url}/${tareaId}`;
    return this.http.delete(url);
  }

  generarId() {
    return parseInt((Math.random() * 10000000000).toString());
  }

  actualizarTarea(tarea: Tarea) {
    return this.http.put(`${this.url}/${tarea.id}`, tarea);
  }
}
