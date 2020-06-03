import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-top-header',
  templateUrl: './ma-top-header.component.html',
  styleUrls: ['./ma-top-header.component.scss']
})
export class MaTopHeaderComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
