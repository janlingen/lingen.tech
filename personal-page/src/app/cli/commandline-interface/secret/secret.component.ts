import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  success = false;
  wrong = false;
  input: string = '';

  constructor(private router: Router) {}

  checkInput() {
    if (this.input == 'hcasgpelhgtls') {
      this.success = true;
      this.wrong = false;
    } else {
      this.success = false;
      this.wrong = true;
    }
  }

  backwards() {
    this.router.navigate(['/cli']);
  }
}
