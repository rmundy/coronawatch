import { TypeKeys } from './index';

export interface SetPageName {
  type: TypeKeys.SET_PAGE_NAME;
  name: string;
}

export const setUserName = (name: string) => (dispatch, _getState) => {
  const action: SetPageName = {
    type: TypeKeys.SET_PAGE_NAME,
    name
  };
  dispatch(action);
};
