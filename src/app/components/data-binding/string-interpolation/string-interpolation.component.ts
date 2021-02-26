import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {


  msg: string = "Este texto foi escrito na classe do componente para que o template o renderize através do data binding (string interpolation)."

  constructor() { }

  ngOnInit(): void {
  }

}
