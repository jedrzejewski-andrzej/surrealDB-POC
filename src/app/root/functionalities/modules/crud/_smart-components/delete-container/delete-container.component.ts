import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeleteService} from '../../_services/delete.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-delete-container',
  templateUrl: './delete-container.component.html',
  styleUrls: ['./delete-container.component.scss'],
})
export class DeleteContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  sqlObj$: Observable<any>;
  
  idControl = new FormControl(6);
  
  constructor(private _deleteService: DeleteService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._deleteService._surrealObj$;
    this.sqlObj$ = this._deleteService.sqlObj$;
  }
  
  deleteOnSurreal(): void {
    this._deleteService.deleteOnSurreal(this.idControl.value || 6);
  }
  
  deleteOnSql(): void {
    this._deleteService.deleteOnSql();
  }
  
  ngOnDestroy() {
    this._deleteService.clear();
  }
}
