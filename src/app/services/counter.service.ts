import { Injectable } from '@angular/core';


export class CounterService {
  counter = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}
