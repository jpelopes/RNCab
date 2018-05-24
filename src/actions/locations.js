export function setOrigin(origin) {
  return {
    type: 'SET_ORIGIN',
    origin,
  };
}

export function setDestination(destination) {
  return {
    type: 'SET_DESTINATION',
    destination,
  };
}
