import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:string[] = []

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
  // Linked on card.component.html
  remove() {
    this.products.pop()
  }
}
