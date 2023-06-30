/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';
import { AppContext } from '../contexts/AppContext';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { values, handleChange, setValues } = useForm({});
  const avatarRef = React.useRef();
  const isLoading = React.useContext(AppContext).isLoading;

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar,
    });
  }

  React.useEffect(() => {
    setValues({ avatar: '' });
  }, [isOpen, setValues]);

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_avatar-link"
        placeholder="Ссылка на картинку"
        name="avatar"
        type="url"
        id="input-avatar-link"
        defaultValue=""
        required
        ref={avatarRef}
        onChange={handleChange}
      />
      <span id="input-avatar-link-error" className="popup__error" />
    </PopupWithForm>
  );
}
