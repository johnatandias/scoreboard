export enum ModalTypes {
  ADD_PLAYER = 'addPlayer',
  EDIT_PLAYER = 'editPlayer',
  CLOSE_MODAL = 'closeModal',
}

export const openAddPlayerModal = {
  type: ModalTypes.ADD_PLAYER,
};

export const openEditPlayerModal = (name: string) => ({
  type: ModalTypes.EDIT_PLAYER,
  name,
});

export const closeModal = {
  type: ModalTypes.CLOSE_MODAL,
};
