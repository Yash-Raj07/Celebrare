export const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

export const favoritesReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const exists = state.includes(action.payload);
      if (exists) {
        newState = state.filter(id => id !== action.payload);
      } else {
        newState = [...state, action.payload];
      }
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};
