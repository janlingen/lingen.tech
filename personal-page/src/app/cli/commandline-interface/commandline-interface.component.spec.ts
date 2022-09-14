import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandlineInterfaceComponent } from './commandline-interface.component';

describe('CommandlineInterfaceComponent', () => {
  let component: CommandlineInterfaceComponent;
  let fixture: ComponentFixture<CommandlineInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommandlineInterfaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommandlineInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
