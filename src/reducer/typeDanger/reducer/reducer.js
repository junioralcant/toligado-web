import { produce } from 'immer';
import { ActionType } from './action';

export function typeDangerReducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_TYPE_DANGER:
      return produce(state, (draft) => {
        draft.typeDanger = action.payload.typeDanger;
      });

    default:
      return state;
  }
}
