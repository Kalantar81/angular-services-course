import { Injectable } from '@angular/core';

/** этот декоратор позволяет инжектировать в данный service, через constructor, любые другие services  */
@Injectable({
  /** пропиши данный сервис в root-те модуля, где он находится
   * не надо прописывать в app.module.ts
   */
  providedIn: 'root'
})
export class InjectableService {

  counter = 0;

  constructor() { }

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}
