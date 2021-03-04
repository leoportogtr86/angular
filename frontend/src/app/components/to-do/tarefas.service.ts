import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Tarefa} from './tarefa.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  url = "http://localhost:3000/tarefas"

  constructor(private http: HttpClient) { }



  getTarefas(): Observable<Tarefa[]>{

    return this.http.get<Tarefa[]>(this.url)

  }

  

  inserirTarefa(task: Tarefa): Observable<Tarefa>{

    return this.http.post<Tarefa>(this.url, task)

  }

  finalizarTarefa(task: Tarefa): Observable<Tarefa>{

    console.log('tarefa feita')

    return this.http.put<Tarefa>(this.url+"/"+task.id, task)



  }
}
