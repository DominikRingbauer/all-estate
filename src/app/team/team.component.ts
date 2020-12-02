import { Component, OnInit } from '@angular/core';
import { staff } from '../staff';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})

export class TeamComponent implements OnInit {

  staff = staff;

  constructor() { 

  }

  

  ngOnInit(): void {

  }
  

}

