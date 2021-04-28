import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private result: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  ajouter() {
    this.compteur++;
    this.result.emit(this.compteur);
  }

  diminuer() {
    this.compteur--;
    this.result.emit(this.compteur);
  }
}
