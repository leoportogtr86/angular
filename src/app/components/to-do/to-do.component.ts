import { Component, OnInit } from '@angular/core';

import {Tarefa} from './tarefa.model'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  tarefa: string = ''


  tarefas: Tarefa[] = [
    
    {titulo: "Estudar typescript", feita: true, classe: "feito", icon: "done_all"},
    {titulo: "Estudar nodejs", feita: true, classe: "feito", icon: "done_all"},
    {titulo: "Estudar angular", feita: true, classe: "nao-feito", icon: "radio_button_unchecked"},
    {titulo: "Estudar mongodb", feita: true, classe: "nao-feito", icon: "radio_button_unchecked"}  
  
  ]

  constructor() { }

  ngOnInit(): void {
  }



}
