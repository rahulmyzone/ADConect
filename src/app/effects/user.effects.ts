import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetUser, EUserActions } from '../actions/user.action';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {

    constructor(
        private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
        ) {}

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList)))
    )
}