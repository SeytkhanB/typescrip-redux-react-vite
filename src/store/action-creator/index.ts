import * as UserActionCreators from "./userActionCreator";
import * as TodosActionCreators from "./todoActionCreator";

export default {
  ...UserActionCreators,
  ...TodosActionCreators,
};
