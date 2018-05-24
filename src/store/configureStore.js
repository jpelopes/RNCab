import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initalState) {
  return createStore(
    rootReducer,
    initalState,
  );
}
