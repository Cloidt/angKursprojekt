import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toppgleOpen() {
    this.isOpen = !this.isOpen;
  }
}
