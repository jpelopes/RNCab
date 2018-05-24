const defaultState = {
  locations: {
    origin: {},
    destination: {},
  },
};

export default function locations(state = defaultState, action) {
  switch (action.type) {
    case 'SET_ORIGIN':
      return {
        ...state,
        origin: action.origin,
      };
    case 'SET_DESTINATION':
      return {
        ...state,
        destination: action.destination,
      };
    default:
      return state;
  }
}
