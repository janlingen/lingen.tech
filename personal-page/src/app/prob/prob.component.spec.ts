import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbComponent } from './prob.component';

describe('ProbComponent', () => {
  let component: ProbComponent;
  let fixture: ComponentFixture<ProbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
