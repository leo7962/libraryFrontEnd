import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.sass']
})
export class MenuListComponent {
  @Output() menuToggle = new EventEmitter();

  onMenuToggleDispatch() {
    this.menuToggle.emit();
  }
}
