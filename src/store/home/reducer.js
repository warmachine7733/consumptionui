const initialState = {
  loading: false,
  currentAlc: 0,
};
export const home = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_CUNTER":
      return { ...state, currentAlc: action.data };
    default:
      return state;
  }
};
