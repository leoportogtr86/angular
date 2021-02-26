import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimeiroService {

  constructor() { }

  getTest(){

    return 'retorno vindo do primeiro service'
  }
}
