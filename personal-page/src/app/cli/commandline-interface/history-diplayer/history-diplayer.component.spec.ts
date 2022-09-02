import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDiplayerComponent } from './history-diplayer.component';

describe('HistoryDiplayerComponent', () => {
  let component: HistoryDiplayerComponent;
  let fixture: ComponentFixture<HistoryDiplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDiplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryDiplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
