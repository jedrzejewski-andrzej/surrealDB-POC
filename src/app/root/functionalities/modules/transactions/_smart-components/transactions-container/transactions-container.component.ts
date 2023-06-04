import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss'],
})
export class TransactionsContainerComponent {
  sessionA: string[] = [
    'BEGIN TRANSACTION;',
    'SELECT * FROM users;',
    'UPDATE users:2 SET balance+=300;',
    'CANCEL TRANSACTION;',
    'SELECT * FROM users;'
  ];
  sessionB: string[] = [
    'SELECT * FROM users;',
  ]
  
  constructor(private _snackBar: MatSnackBar) {}
  
  openSnackBar() {
    this._snackBar.open('Command successfully copied :)', '', {
      panelClass: 'panel-custom',
      duration: 900,
    });
  }
}