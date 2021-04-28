import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public compteur: number = 10;
  result: number;

  constructor() {}

  ngOnInit() {}

  changeResult(result: number): void {
    console.log("changeResult");

    this.result = result;
  }
}
