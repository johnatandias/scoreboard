import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOnClickOutside } from 'hooks';
import { addPlayer, closeModal, ModalTypes, editPlayer, deletePlayer } from 'actions';
import { IStore } from 'store';
import { Input, Button } from 'components';
import css from './Modal.module.css';

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

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayer(value);
    setError(value.trim().length ? '' : 'Please, insert a valid name!');
  };

  const savePlayer = () => {
    if (!error) {
      dispatch(addPlayer({ name: player }));
      dispatch(closeModal);
    }
  };

  return (
    <React.Fragment>
      <Header title="Add new player" />

      <Content>
        <Input
          type="text"
          label="Name"
          onInputChange={onInputChange}
          error={error}
          value={player}
        />
      </Content>

      <Footer>
        <Button label="Add" onClick={savePlayer} />
      </Footer>
    </React.Fragment>
  );
};

const EditPlayer: React.FC<{ name: string }> = ({ name }) => {
  const [player, setPlayer] = useState(name);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPlayer(value);
    setError(value.trim().length ? '' : 'Please, insert a valid name!');
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
      <Header title="Edit player" />

      <Content>
        <Input
          type="text"
          label="Name"
          onInputChange={onInputChange}
          error={error}
          value={player}
        />

        <Footer>
          <Button label="Delete" onClick={deletePlayerByName} color="#B00020" />
          <Button label="Rename" onClick={saveChanges} />
        </Footer>
      </Content>
    </React.Fragment>
  );
};

export const Modal = () => {
  const dispatch = useDispatch();
  const modalReference = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalReference, () => dispatch(closeModal));

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
    <div className={css.container}>
      <div ref={modalReference} className={css.modal}>
        {RenderModal}
      </div>
    </div>
  );
};
