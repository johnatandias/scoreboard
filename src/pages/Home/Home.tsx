import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from 'store';
import { List, Header, Add, Start } from 'components';
import { Player } from 'reducers';
import { openAddPlayerModal, openEditPlayerModal } from 'actions';
import css from './Home.module.css';
import { RouteComponentProps } from 'react-router-dom';

const NoPlayers: React.FC = () => (
  <section className={css.noPlayers}>
    <span>No registered players!</span>
  </section>
);

export const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const players = useSelector((state: IStore) => state.playerState);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Header title="Scoreboard">
        <Add color="white" onClick={() => dispatch(openAddPlayerModal)} />
        {Boolean(players.length) && (
          <Start onClick={() => history.push('/start')} />
        )}
      </Header>

      <div className={css.container}>
        {players.length ? (
          players.map((player: Player) => (
            <React.Fragment key={player.name}>
              <List onClick={() => dispatch(openEditPlayerModal(player.name))}>
                {player.name}
              </List>
            </React.Fragment>
          ))
        ) : (
          <NoPlayers />
        )}
      </div>
    </React.Fragment>
  );
};
