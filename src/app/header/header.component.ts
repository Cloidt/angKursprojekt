import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() ansichtGewechselt = new EventEmitter<string>();
  @Output() aktuelleAnsicht: string = 'rezepte';

  onSelect(ansicht: string) {
    this.ansichtGewechselt.emit(ansicht);
  }

  constructor() {
  }
}
