import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aktuelleAnsicht: string = 'rezepte';

  toggleAnsicht(ansicht: string) {
    this.aktuelleAnsicht = ansicht;
  }
}
