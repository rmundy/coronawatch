const getInitialState = (): PageState => {
  return {
    name: "/"
  };
};

const page = (
  state = getInitialState(),
  action: any /*for now...*/
): PageState => {
  switch (action.type) {
  }
  return state;
};

export default page;
