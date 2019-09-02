import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, List, Remove, Add } from 'components';
import { decreaseScore, increaseScore } from 'actions';
import { Player as IPlayer } from 'reducers';
import { IStore } from 'store';
import css from './Start.module.css';

const Player = ({ name, score }: IPlayer) => {
  const dispatch = useDispatch();

  return (
    <List className={css.list}>
      <div className={css.nameAndScore}>
        <span className={css.name}>{name}</span>
        <span className={css.score}>{score}</span>
      </div>

      <div className={css.score}>
        <Remove
          color="black"
          onClick={() => dispatch(decreaseScore({ name }))}
        />
        <Add color="black" onClick={() => dispatch(increaseScore({ name }))} />
      </div>
    </List>
  );
};

export const Start: React.FC = () => {
  const players = useSelector((state: IStore) => state.playerState);

  return (
    <React.Fragment>
      <Header title="Scoreboard" />
      <div className={css.container}>
        {players.map((player: IPlayer) => (
          <React.Fragment key={player.name}>
            <Player {...player} />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
