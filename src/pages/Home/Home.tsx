import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IStore } from 'store';
import { List, Header } from 'components';
import { Add, Start } from 'icons';
import { Player } from 'reducers';
import { openAddPlayerModal, openEditPlayerModal } from 'actions';
import { useTranslation } from 'react-i18next';
import css from './Home.module.css';

const NoPlayers: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className={css.noPlayers}>
      <span>{t('home:no-players')}</span>
    </section>
  );
};

export const Home: React.FC<RouteComponentProps> = ({ history, match }) => {
  const players = useSelector((state: IStore) => state.playerState);
  const dispatch = useDispatch();
  const [t] = useTranslation();

  return (
    <React.Fragment>
      <Header title={t('app:title')}>
        <Add color="white" onClick={() => dispatch(openAddPlayerModal)} />
        {Boolean(players.length > 1) && (
          <Start onClick={() => history.push(`${match.path}start`)} />
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
