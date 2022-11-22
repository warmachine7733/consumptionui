import axios from "axios";

export const handleCounter = (data) => {
  return (dispatch) => {
    dispatch({ type: "HANDLE_CUNTER", data });
  };
};
export const storeBlogs = (data) => {
  return (dispatch) => {
    dispatch({ type: "STORE_BLOGS", data });
  };
};
export const getMediumPosts = () => {
  return async (dispatch, getState) => {
    try {
    } catch (error) {
      console.log(console.error);
    }
  };
};

export const ipLookUp = () => {
  return async (dispatch, getState) => {};
};
