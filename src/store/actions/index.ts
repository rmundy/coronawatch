import { SetPageName } from './page';

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | SetPageName;

export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  ERROR = 'ERROR',
  SET_PAGE_NAME = 'SET_PAGE_NAME'
}
