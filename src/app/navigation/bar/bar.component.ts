import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent {
  @Output() menuToggle = new EventEmitter();

  onMenuToggleDispatch() {
    this.menuToggle.emit();
  }
}
