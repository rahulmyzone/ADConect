import { IConfig } from '../models/config.model';

export interface IConfigState {
    config: IConfig;
}

export const initialConfigState: IConfigState = {
    config: null
}