import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-graphical-interface',
  templateUrl: './graphical-interface.component.html',
  styleUrls: ['./graphical-interface.component.css'],
})
export class GraphicalInterfaceComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('lingen.tech | GUI');
  }

  ngOnInit(): void {}
}
