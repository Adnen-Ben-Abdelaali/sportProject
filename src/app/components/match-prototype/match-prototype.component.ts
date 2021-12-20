import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-prototype',
  templateUrl: './match-prototype.component.html',
  styleUrls: ['./match-prototype.component.css']
})
export class MatchPrototypeComponent implements OnInit {

  constructor() { }
  @Input() matchInput : any;

  ngOnInit() {
  }

}
