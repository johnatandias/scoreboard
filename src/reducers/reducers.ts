import { combineReducers } from 'redux';
import { playerReducer } from './players';
import { modalReducer } from './modal';

export const Reducers = combineReducers({
  playerState: playerReducer,
  modalState: modalReducer,
});
