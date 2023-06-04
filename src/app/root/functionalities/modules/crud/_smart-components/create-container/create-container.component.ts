import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreateService} from '../../_services/create.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-create-container',
  templateUrl: './create-container.component.html',
  styleUrls: ['./create-container.component.scss'],
})
export class CreateContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  
  constructor(private _createService: CreateService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._createService.surrealObj$;
  }
  
  createOnSurreal(): void {
    this._createService.createOnSurreal();
  }
  
  ngOnDestroy() {
    this._createService.clear();
  }
}
