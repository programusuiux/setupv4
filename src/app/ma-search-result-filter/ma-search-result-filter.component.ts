import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-search-result-filter',
  templateUrl: './ma-search-result-filter.component.html',
  styleUrls: ['./ma-search-result-filter.component.scss']
})
export class MaSearchResultFilterComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit(): void {
  }

}
