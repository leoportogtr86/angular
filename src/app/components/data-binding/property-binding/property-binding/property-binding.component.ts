import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  class: string = "text-center text-info bg-light rounded"

  constructor() { }

  ngOnInit(): void {
  }

}
