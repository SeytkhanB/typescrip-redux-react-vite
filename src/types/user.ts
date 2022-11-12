export enum UserReducerActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
  type: UserReducerActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
  type: UserReducerActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

interface FetchUsersErrorAction {
  type: UserReducerActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserReducerAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;

export interface UserReducerState {
  users: any[];
  loading: boolean;
  error: null | string;
}
