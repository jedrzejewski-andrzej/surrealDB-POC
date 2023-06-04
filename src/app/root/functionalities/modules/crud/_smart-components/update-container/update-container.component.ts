import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateService} from '../../_services/update.service';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-update-container',
  templateUrl: './update-container.component.html',
  styleUrls: ['./update-container.component.scss'],
})
export class UpdateContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  
  idControl = new FormControl(6);
  
  constructor(private updateService: UpdateService) {}
  
  ngOnInit() {
    this.surrealObj$ = this.updateService._surrealObj$
  }
  
  updateOnSurreal(): void {
    this.updateService.updateOnSurreal(this.idControl.value || 6);
  }

  ngOnDestroy() {
    this.updateService.clear();
  }
}
