import { Component, OnInit } from '@angular/core';

import {PrimeiroService} from './primeiro.service'

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome: string = "Leo Porto"

  constructor(private primeiroService: PrimeiroService) { }

  ngOnInit(): void {

    


  }

  clique(): void {

    console.log(this.primeiroService.getTest())
  }

  alerta(): void{

    alert('Alerta ativado')
  }

}
