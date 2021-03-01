import { Component, OnInit } from '@angular/core';
import { LocalServiceService } from './local-service.service';

@Component({
  selector: 'app-local-service',
  templateUrl: './local-service.component.html',
  styleUrls: ['./local-service.component.less'],
  /** видимость данного сервиса будет только в этом component
   * возможно создать новый component и инжектировать localService туда
   * тогда область видимости сервиса будет в двух компонентах и сервис перестанет быть singleton
   * он как-будто, создаст свой instance в другом компоненте
   * см. пример в InjectableComponent.ts
   */
  providers: [LocalServiceService]
})
export class LocalServiceComponent implements OnInit {

  constructor(public localServiceService: LocalServiceService) { }

  ngOnInit(): void {
  }

}
