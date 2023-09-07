import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:string[] = []
  menuType:string = "nathan"

  constructor() {
    this.products = [
      "Mouse",
      "Teclado",
      "Monitor",
      "Pen Drive",
      "Headset"
    ]
  }

  ngOnInit(): void {
  }

  // Linked on card.component.html
  add() {
    this.products.push("New product")
  }

  remove() {
    this.products.pop()
  }

  removeWithIndex(index:number) {
    this.products.splice(index, 1)
  }


}
