import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  aktuelleAnsicht: string = 'rezepte';
  // aktuelleAnsicht: string = 'einkaufsliste';

  toggleAnsicht(ansicht: string) {
    this.aktuelleAnsicht = ansicht;
  }
}
