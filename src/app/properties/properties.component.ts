import { Component, OnInit } from '@angular/core';
import { buildings } from '../buildings';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.sass']
})
export class PropertiesComponent implements OnInit {

  buildings = buildings;

  constructor() { }

  ngOnInit(): void {
  }

}
