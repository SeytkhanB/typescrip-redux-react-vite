import {
  UserReducerAction,
  UserReducerState,
  UserReducerActionTypes,
} from "../../types/user";

const initialState: UserReducerState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserReducerAction
): UserReducerState => {
  switch (action.type) {
    case UserReducerActionTypes.FETCH_USERS:
      return { ...state, loading: true, error: null };

    case UserReducerActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, error: null, users: action.payload };

    case UserReducerActionTypes.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
