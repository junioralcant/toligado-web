export const ActionType = {
  ADD_TYPE_DANGER: 'ADD_TYPE_DANGER',
};

export function addTypeDanger(data) {
  return {
    type: ActionType.ADD_TYPE_DANGER,
    payload: {
      typeDanger: data,
    },
  };
}
