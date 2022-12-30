export const getUsers = (state) => state.users.todoReducer;
export const getFilter = (state) => state.users.filterReducer;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const users = getUsers(state);

  const normalizeFilter = filter.toLowerCase();

  return users.filter((user) =>
  user.name.toLowerCase().includes(normalizeFilter)
  );
};
