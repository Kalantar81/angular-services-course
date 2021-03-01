import { Component, OnInit } from '@angular/core';
import { InjectableService } from 'src/app/services/injectable.service';
import { LocalServiceService } from '../local-service/local-service.service';

@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
  styleUrls: ['./injectable.component.less'],
  providers: [LocalServiceService]
})
export class InjectableComponent implements OnInit {

  constructor(
    public injectableService: InjectableService,
    public localServiceService: LocalServiceService) { }

  ngOnInit(): void {
  }

}
