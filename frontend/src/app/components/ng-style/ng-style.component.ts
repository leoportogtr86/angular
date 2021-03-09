import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  cor: string = "green"

  estilo:any ={

    'color': this.cor,
    'border-radius': '12px',
    'background-color': 'white',
    'width': '400px',
    'border':'2px solid red'
  }
  constructor() { }

  ngOnInit(): void {


  }

  styles(): any{

    return this.estilo


  }

  

}
