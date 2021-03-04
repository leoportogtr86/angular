import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {Tarefa} from './tarefa.model'
import {TarefasService} from './tarefas.service'


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {



  tarefas: Tarefa[] = []
  tarefaInput: string = ""

  task = {

    titulo: this.tarefaInput
  }

  constructor(private tarefa: TarefasService) { }

  ngOnInit(): void {

    this.tarefa.getTarefas().subscribe((res)=>{

      console.log(res)
      this.tarefas = res
    })


  }

  alterarTarefa(resposta: Event): void{

    this.tarefaInput = (<HTMLInputElement>resposta.target).value
    console.log(this.tarefaInput)

  }

  criarTarefa(): void{

    
    console.log(this.tarefaInput)

    this.task = {

      titulo: this.tarefaInput
    }

    this.tarefa.inserirTarefa(this.task).subscribe(()=>{

      console.log('tarefa criada')
      console.log(this.task)
    })

     this.tarefa.getTarefas().subscribe((res)=>{

      console.log(res)
      this.tarefas = res
    })

  }

 

  check(e: Event): void{

    console.log((<HTMLElement>e.target).innerText)

    let tarefaAtualizada: Tarefa

    tarefaAtualizada ={
      
      titulo: (<HTMLElement>e.target).innerText,
      estado: "feito"
    }

    this.tarefa.finalizarTarefa(tarefaAtualizada).subscribe(()=>{


      this.tarefa.getTarefas().subscribe((res)=>{

      console.log(res)
      this.tarefas = res
    })
    })
    

  }




}
