import { Contact } from './contact';
import { Action } from '@ngrx/store';

// tslint:disable:typedef
export const LIST = 'List.List';
export class List implements Action {
    readonly type = LIST;
}

export const LIST_RESULT = 'List.Result';
export class ListResult implements Action {
    readonly type = LIST_RESULT;
    constructor(public rows:
        ReadonlyArray<Contact>) {}
}
