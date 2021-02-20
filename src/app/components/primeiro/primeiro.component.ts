import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome: string = "Leo Porto"

  constructor() { }

  ngOnInit(): void {


  }

  clique(): void {

    console.log('Clicou no botão')
  }

}
