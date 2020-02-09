import { ActionTypes, TypeKeys } from '.';

export interface SetPageName {
  type: TypeKeys.SET_PAGE_NAME;
  name: string;
}

export const setPageName = (name: string) => (dispatch: (action: ActionTypes) => void, _getState: () => void) => {
  const action: SetPageName = {
    type: TypeKeys.SET_PAGE_NAME,
    name
  };
  dispatch(action);
};
