import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  texto: string = "Olá, eu sou o segundo componente da aplicação!"

  constructor() { }

  ngOnInit(): void {
  }

}
