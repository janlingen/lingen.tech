import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDisplayerComponent } from './history-displayer.component';

describe('HistoryDisplayerComponent', () => {
  let component: HistoryDisplayerComponent;
  let fixture: ComponentFixture<HistoryDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryDisplayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
