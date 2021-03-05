import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Funcionario} from './funcionario.model'

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  url = " http://localhost:3000/funcionarios"

  constructor(private http: HttpClient) { 


  }

  getFuncionarios(): Observable<Funcionario[]>{

    return this.http.get<Funcionario[]>(this.url)
    
  }
}
