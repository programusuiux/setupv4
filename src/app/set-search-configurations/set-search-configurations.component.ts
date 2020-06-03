import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-search-configurations',
  templateUrl: './set-search-configurations.component.html',
  styleUrls: ['./set-search-configurations.component.scss']
})
export class SetSearchConfigurationsComponent implements OnInit {
  selected = 'option1';
  constructor() { }

  ngOnInit(): void {
  }

}
