import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, List } from 'components';
import { Remove, Add } from 'icons';
import { decreaseScore, increaseScore } from 'actions';
import { Player as IPlayer } from 'reducers';
import { IStore } from 'store';
import css from './Start.module.css';
import { useTranslation } from 'react-i18next';

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
  const [t] = useTranslation();

  return (
    <React.Fragment>
      <Header title={t('app:title')} />
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
