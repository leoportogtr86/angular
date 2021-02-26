import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  resultado: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  mais(): void{

    this.resultado++


  }

  menos(): void{
    
    this.resultado--



  }

}
