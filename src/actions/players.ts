export enum PlayerTypes {
  ADD = 'add',
  EDIT = 'edit',
  DELETE = 'delete',
  INCREASE_SCORE = 'increaseScore',
  DECREASE_SCORE = 'decreaseScore',
}

export const addPlayer = ({ name }: { name: string }) => ({
  type: PlayerTypes.ADD,
  name,
});

export const editPlayer = ({
  oldName,
  newName,
}: {
  oldName: string;
  newName: string;
}) => ({
  type: PlayerTypes.EDIT,
  newName,
  oldName,
});

export const deletePlayer = ({ name }: { name: string }) => ({
  type: PlayerTypes.DELETE,
  name,
});

export const increaseScore = ({ name }: { name: string }) => ({
  type: PlayerTypes.INCREASE_SCORE,
  name,
});

export const decreaseScore = ({ name }: { name: string }) => ({
  type: PlayerTypes.DECREASE_SCORE,
  name,
});
