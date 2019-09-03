import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, List } from 'components';
import { Trophy, Flashlight, Less, More } from 'icons';
import { decreaseScore, increaseScore } from 'actions';
import { Player as IPlayer } from 'reducers';
import { IStore } from 'store';
import { useTranslation } from 'react-i18next';
import css from './Start.module.css';

interface Player extends IPlayer {
  bigger: number;
  smaller: number;
  positions: number[];
}

const Player = ({ name, score, bigger, smaller, positions }: Player) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const tiedGame = bigger === smaller;
  const firstPlace = !tiedGame && score === bigger;
  const lastPlace = !tiedGame && score === smaller;
  const position = positions.findIndex(position => position === score) + 1;

  return (
    <List className={css.list}>
      <div className={css.iconNameAndScore}>
        {tiedGame ? null : (
          <span className={css.position}>
            {t('start:position', { position })}
          </span>
        )}
        {firstPlace ? <Trophy /> : null}
        {lastPlace ? <Flashlight /> : null}
        <div className={css.nameAndScore}>
          <span className={css.name}>{name}</span>
          <span className={css.score}>{score}</span>
        </div>
      </div>

      <div className={css.score}>
        <Less onClick={() => dispatch(decreaseScore({ name }))} />
        <More onClick={() => dispatch(increaseScore({ name }))} />
      </div>
    </List>
  );
};

export const Start: React.FC = () => {
  const players = useSelector((state: IStore) => state.playerState);
  const [t] = useTranslation();

  const scores = players.map(player => player.score);
  const bigger = Math.max(...scores);
  const smaller = Math.min(...scores);
  const positions = [...new Set(scores)].sort().reverse();

  return (
    <React.Fragment>
      <Header title={t('app:title')} />
      <div className={css.container}>
        {players.map((player: IPlayer) => (
          <React.Fragment key={player.name}>
            <Player
              {...player}
              bigger={bigger}
              smaller={smaller}
              positions={positions}
            />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
