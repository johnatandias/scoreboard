import { ModalTypes } from 'actions/modal';

export interface ModalState {
  opened: boolean;
  modal: ModalTypes | null;
  data: any;
}

const initialState: ModalState = {
  opened: false,
  modal: null,
  data: null,
};

export const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ModalTypes.ADD_PLAYER:
      return {
        opened: true,
        modal: ModalTypes.ADD_PLAYER,
        data: null,
      };

    case ModalTypes.EDIT_PLAYER:
      return {
        opened: true,
        modal: ModalTypes.EDIT_PLAYER,
        data: action.name,
      };

    case ModalTypes.CLOSE_MODAL:
      return { ...initialState };

    default:
      return state;
  }
};
