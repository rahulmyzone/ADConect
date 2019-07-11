import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from './state/app.state';
import { selectConfig } from './selectors/config.selector';
import { GetConfig } from './actions/config.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ADConnect';
  config$ = this._store.pipe(select(selectConfig));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetConfig());
  }
}
