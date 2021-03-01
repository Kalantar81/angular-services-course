import { Injectable } from '@angular/core';

@Injectable()
export class LocalServiceService {

  counter = 0;

  constructor() { }

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}
