import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capturando-eventos',
  templateUrl: './capturando-eventos.component.html',
  styleUrls: ['./capturando-eventos.component.css']
})
export class CapturandoEventosComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }


  clique(event: Event): void{

    console.log(event)
    console.log(event.target)

  }

  alteraTexto(event: Event): void{

    console.log(event)
    console.log(event.target)

  }

  sobre(event: Event): void{

    console.log(event)
    console.log(event.target)    


  }

}
