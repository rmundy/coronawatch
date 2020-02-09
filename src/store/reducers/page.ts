import { ActionTypes, TypeKeys } from './../actions/index';

const getInitialState = (): PageState => {
  return {
    name: '/'
  };
};

const page = (state = getInitialState(), action: ActionTypes): PageState => {
  switch (action.type) {
    case TypeKeys.SET_PAGE_NAME: {
      return { ...state, name: action.name };
    }
  }
  return state;
};

export default page;
