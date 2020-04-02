import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-inner-header',
  templateUrl: './ma-inner-header.component.html',
  styleUrls: ['./ma-inner-header.component.scss']
})
export class MaInnerHeaderComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
