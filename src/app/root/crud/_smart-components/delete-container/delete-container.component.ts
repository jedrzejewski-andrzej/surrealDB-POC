import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeleteService} from '../../_services/delete.service';

@Component({
  selector: 'app-delete-container',
  templateUrl: './delete-container.component.html',
  styleUrls: ['./delete-container.component.scss'],
})
export class DeleteContainerComponent implements OnInit, OnDestroy {
  surrealObj$: Observable<any>;
  sqlObj$: Observable<any>;
  
  constructor(private _deleteService: DeleteService) {}
  
  ngOnInit() {
    this.surrealObj$ = this._deleteService._surrealObj$;
    this.sqlObj$ = this._deleteService.sqlObj$;
    this._deleteService.deleteOnSurreal();
    this._deleteService.deleteOnSql();
  }
  
  ngOnDestroy() {
    this._deleteService.clear();
  }
}
