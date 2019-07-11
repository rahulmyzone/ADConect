import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.action';
import { switchMap } from 'rxjs/operators';
import { IConfig } from '../models/config.model';
import { of } from 'rxjs';
import { ConfigService } from '../services/config.service';

@Injectable()
export class ConfigEffects {
    
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ) {}

    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap( () => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config))
        })
    )



}