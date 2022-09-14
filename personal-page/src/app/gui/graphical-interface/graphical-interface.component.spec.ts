import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicalInterfaceComponent } from './graphical-interface.component';

describe('GraphicalInterfaceComponent', () => {
  let component: GraphicalInterfaceComponent;
  let fixture: ComponentFixture<GraphicalInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraphicalInterfaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GraphicalInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
