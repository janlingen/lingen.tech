import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent {
  success = false;
  wrong = false;
  input : string = "";

  constructor() {}

  checkInput(){
    if(this.input == "found"){
      this.success = true;
      this.wrong = false;
    } else{
      this.success = false;
      this.wrong = true;
    }
  }
}
