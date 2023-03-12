import { Component } from '@angular/core';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.css'],
})
export class ProbComponent {
  pity = false;
  success_cnt = false;
  times_success = 0;

  probability: number = 0;

  probSave: number = 0;

  attempts: number = 0;

  attemptsFirst: number = 0;

  msPerTry: number = 350;

  results: string[] = [];

  waitForMe(ms: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(null), ms);
    });
  }

  checkPity() {
    this.pity = !this.pity;
  }

  checkSuccessCnt() {
    this.success_cnt = !this.success_cnt;
  }

  async calcProb() {
    this.probSave = this.probability;
    console.log(this.probSave);
    this.attemptsFirst = 0;
    this.times_success = 0;
    this.results = [];
    while (this.attempts > 0) {
      console.log(this.probability);
      let rand = Math.random();
      if (rand <= this.probability) {
        this.results.unshift(rand + ' SUCCESS');
        if (this.success_cnt == true) {
          this.times_success = this.times_success + 1;
          this.probability = this.probSave;
        } else {
          this.attempts = 1;
        }
      } else {
        this.results.unshift(rand + ' FAILURE');
      }
      if (this.pity == true) {
        this.probability = this.probability + this.probSave;
      }
      if (this.success_cnt == false) {
        this.attemptsFirst = this.attemptsFirst + 1;
      }
      this.attempts = this.attempts - 1;
      await this.waitForMe(this.msPerTry);
    }
  }

  onHover() {
    return;
  }
}
