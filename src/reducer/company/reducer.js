import { produce } from 'immer';
import { ActionType } from './action';

export function companyReducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_COMPANY:
      return produce(state, (draft) => {
        draft.company = action.payload.company;
      });

    default:
      return state;
  }
}
