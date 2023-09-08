import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attribute',
  templateUrl: './comp-attribute.component.html',
  styleUrls: ['./comp-attribute.component.css']
})
export class CompAttributeComponent implements OnInit {

  style:string = "enable"

  // ngStyle props
  corFundo:string = "red"
  corFonte:string = "blue"

  constructor() { }

  ngOnInit(): void {
  }

  action() {
    if (this.style === "disable") {
      this.style = "enable"
    } else {
      this.style = "disable"
    }
  }

}
