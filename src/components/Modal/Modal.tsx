import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IStore } from 'store';
import { Input, Button } from 'components';
import {
  addPlayer,
  closeModal,
  ModalTypes,
  editPlayer,
  deletePlayer,
} from 'actions';
import css from './Modal.module.css';
import { Overlay } from 'components/Overlay/Overlay';

const Header: React.FC<{ title: string }> = ({ title }) => (
  <span className={css.title}>{title}</span>
);

const Content: React.FC = ({ children }) => (
  <div className={css.content}>{children}</div>
);

const Footer: React.FC = ({ children }) => (
  <div className={css.footer}>{children}</div>
);

const AddPlayer: React.FC = () => {
  const [player, setPlayer] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const [t] = useTranslation();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayer(value);
    setError(value.trim().length ? '' : t('modal:input-name-error'));
  };

  const savePlayer = () => {
    if (!error) {
      dispatch(addPlayer({ name: player }));
      dispatch(closeModal);
    }
  };

  return (
    <React.Fragment>
      <Header title={t('modal:new-player')} />

      <Content>
        <Input
          type="text"
          label={t('modal:new-player-input-label')}
          onInputChange={onInputChange}
          error={error}
          value={player}
        />
      </Content>

      <Footer>
        <Button label={t('modal:new-player-add-button')} onClick={savePlayer} />
      </Footer>
    </React.Fragment>
  );
};

const EditPlayer: React.FC<{ name: string }> = ({ name }) => {
  const [player, setPlayer] = useState(name);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const [t] = useTranslation();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayer(value);
    setError(value.trim().length ? '' : t('modal:input-name-error'));
  };

  const saveChanges = () => {
    if (!error) {
      dispatch(editPlayer({ oldName: name, newName: player }));
      dispatch(closeModal);
    }
  };

  const deletePlayerByName = () => {
    dispatch(deletePlayer({ name }));
    dispatch(closeModal);
  };

  return (
    <React.Fragment>
      <Header title={t('modal:edit-player')} />

      <Content>
        <Input
          type="text"
          label={t('modal:edit-player-input-label')}
          onInputChange={onInputChange}
          error={error}
          value={player}
        />

        <Footer>
          <Button
            label={t('modal:edit-player-delete-button')}
            onClick={deletePlayerByName}
            color="#B00020"
          />
          <Button
            label={t('modal:edit-player-rename-button')}
            onClick={saveChanges}
          />
        </Footer>
      </Content>
    </React.Fragment>
  );
};

export const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const modalReference = useRef<HTMLDivElement>(null);

  const modal = useSelector((state: IStore) => state.modalState);
  if (!modal.opened) return null;

  let RenderModal;
  switch (modal.modal) {
    case ModalTypes.ADD_PLAYER:
      RenderModal = <AddPlayer />;
      break;

    case ModalTypes.EDIT_PLAYER:
      RenderModal = <EditPlayer name={modal.data} />;
      break;

    default:
      break;
  }

  return (
    <Overlay
      childrenReference={modalReference}
      className={css.container}
      onClose={() => dispatch(closeModal)}
    >
      <div ref={modalReference} className={css.modal}>
        {RenderModal}
      </div>
    </Overlay>
  );
};
