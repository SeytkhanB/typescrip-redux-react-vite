import { Dispatch } from "react";
import { UserReducerAction, UserReducerActionTypes } from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserReducerAction>) => {
    try {
      dispatch({ type: UserReducerActionTypes.FETCH_USERS });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UserReducerActionTypes.FETCH_USERS_SUCCESS,
          payload: data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: UserReducerActionTypes.FETCH_USERS_ERROR,
        payload: "Cannot fetch users!",
      });
    }
  };
};
