import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-terminal-item',
  templateUrl: './terminal-item.component.html',
  styleUrls: ['./terminal-item.component.scss'],
})
export class TerminalItemComponent {
  @Input() text: string = 'responseData';
}
