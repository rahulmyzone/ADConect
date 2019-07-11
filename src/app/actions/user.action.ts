import { Action } from '@ngrx/store'
import { IUser } from '../models/user.model';
export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get Get User Success',
}

export class GetUsers implements Action {
    public readonly type = EUserActions.GetUsers;
    constructor(public paylaod: IUser[]) {}
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]) {}
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload: IUser) {}
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload: IUser) {}
}

export type UserActions = GetUsers | GetUserSuccess | GetUser | GetUsersSuccess;