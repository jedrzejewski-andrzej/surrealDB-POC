import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerminalItemComponent } from './_dumb-components/terminal-item/terminal-item.component';

@NgModule({
  declarations: [TerminalItemComponent],
  imports: [CommonModule],
  exports: [TerminalItemComponent],
})
export class TerminalItemModule {}
