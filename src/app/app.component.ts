import { AppState } from './app-state';
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wait: Observable<number>;
  constructor(store: Store<AppState>) {
    this.wait = store.select((x: AppState) => x.shared.wait);
  }
}

