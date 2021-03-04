import { Component, OnInit } from '@angular/core';

import {PrimeiroService} from './primeiro.service'

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome: string = "Leo Porto"
  title: string = "Primeiro Componente"

  constructor(private primeiroService: PrimeiroService) { }

  ngOnInit(): void {

    

    


  }

  clique(): void {

    console.log(this.primeiroService.getTest())
    this.title = "Texto do Título Alterado"

    setTimeout(() => {

    this.title = "retornando..."

      
    }, 2000);

    setTimeout(() => {

    this.title = "Primeiro Componente"

      
    }, 4000);
  }

  alerta(): void{

    alert('Alerta ativado')
  }

}
