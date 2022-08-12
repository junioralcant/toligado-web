export const ActionType = {
  ADD_COMPANY: 'ADD_COMPANY',
};

export function addCompany(company) {
  return {
    type: ActionType.ADD_COMPANY,
    payload: {
      company,
    },
  };
}
