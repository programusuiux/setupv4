import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-advanced-search',
  templateUrl: './set-advanced-search.component.html',
  styleUrls: ['./set-advanced-search.component.scss']
})
export class SetAdvancedSearchComponent implements OnInit {
  selected = 'option1';
  constructor() { }

  ngOnInit(): void {
  }

}
