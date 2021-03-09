import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classes(): any{

    let classes = {

      "fonte-grande": true,
      "bg-red": true,
      "rounded": true,
      "w-80": true,
      "m-20": true,
      "p-20": true

    }

    return classes


  }

}
