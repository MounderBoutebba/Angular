import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-square",
  templateUrl: "./square.component.html",
  styleUrls: ["./square.component.scss"]
})
export class SquareComponent implements OnInit {
  @Input() value: "O" | "X";
  constructor() {}

  ngOnInit() {}
}
