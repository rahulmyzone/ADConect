import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.action';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { UserService } from '../services/user.service';
import { selectUserList } from '../selectors/user.selector';
import { of } from 'rxjs';
import { IUserHttp } from '../models/http-models/user-http.interface';

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
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userhttp: IUserHttp) => of(new GetUsersSuccess(userhttp.users)))
    );
}