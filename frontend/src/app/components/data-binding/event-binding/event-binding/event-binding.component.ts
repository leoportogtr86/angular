import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  texto: string = "Texto a ser modificado."
  text: string = ""

  constructor() { }

  ngOnInit(): void {
  }


  alterarTexto(): void{

    this.texto = "Texto mudou..."
  }

  modificaTexto(): void{

    console.log(this.text)

  }
}
