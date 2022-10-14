import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-graphical-interface',
  templateUrl: './graphical-interface.component.html',
  styleUrls: ['./graphical-interface.component.css'],
})
export class GraphicalInterfaceComponent implements OnInit {
  status: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
