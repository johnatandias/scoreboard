import { PlayerTypes } from 'actions/players';

export interface Player {
  name: string;
  score: number;
}

const initialState: Player[] | [] = [];

export const playerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PlayerTypes.ADD:
      const findPlayer = state.find(
        (player: Player) => player.name === action.name
      );

      return findPlayer
        ? state
        : [...state, { name: action.name, score: 0 }].sort(
            (a: Player, b: Player) =>
              a.name < b.name ? -1 : a.name > b.name ? 1 : 0
          );

    case PlayerTypes.EDIT:
      const players = [...state];
      const playerIndex = players.findIndex(
        (player: Player) => player.name === action.oldName
      );

      if (playerIndex === -1) return players;

      players[playerIndex].name = action.newName;
      return players;

    case PlayerTypes.DELETE:
      return state.filter((player: Player) => player.name !== action.name);

    case PlayerTypes.INCREASE_SCORE:
      return [...state].map((player: Player) => {
        if (player.name === action.name) {
          player.score = player.score + 1;
        }
        return player;
      });

    case PlayerTypes.DECREASE_SCORE:
      return [...state].map((player: Player) => {
        if (player.name === action.name) {
          const score = player.score - 1;
          player.score = score === -1 ? 0 : score;
        }
        return player;
      });

    default:
      return state;
  }
};
