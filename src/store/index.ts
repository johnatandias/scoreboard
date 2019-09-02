import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducers } from 'reducers';
import { Player } from 'reducers/players';
import { ModalState } from 'reducers/modal';

export interface IStore {
  playerState: Player[];
  modalState: ModalState;
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
