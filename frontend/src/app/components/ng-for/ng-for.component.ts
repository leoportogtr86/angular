import { Component, OnInit } from '@angular/core';

import {FuncionariosService} from './funcionarios.service'
import {Funcionario} from './funcionario.model'

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor(private funcionarioService: FuncionariosService) { }

  funcionarios: Funcionario[] = []



  ngOnInit(): void {

     this.funcionarioService.getFuncionarios().subscribe((res)=>{


      console.log(res)
      this.funcionarios = res
    })


  }


  




}
