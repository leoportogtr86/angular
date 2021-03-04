import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isVisivel1: boolean = true
  isVisivel2: boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  mudarVisualizacao(): void{

    this.isVisivel1 = !this.isVisivel1
    this.isVisivel2 = !this.isVisivel2

  }

  

}
