/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useForm from '../hooks/useForm';
import { AppContext } from '../contexts/AppContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});
  const isLoading = React.useContext(AppContext).isLoading;

  React.useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, isOpen, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <PopupWithForm
      name="proifile"
      title="Редактировать профиль"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_profile-name"
        name="name"
        placeholder="Имя"
        required
        type="text"
        minLength="2"
        maxLength="40"
        id="input-profile-name"
        value={values.name ?? ''}
        onChange={handleChange}
      />
      <span id="input-profile-name-error" className="popup__error" />
      <input
        className="popup__input popup__input_type_profile-about"
        name="about"
        placeholder="О себе"
        required
        type="text"
        minLength="2"
        maxLength="200"
        id="input-profile-about"
        value={values.about ?? ''}
        onChange={handleChange}
      />
      <span id="input-profile-about-error" className="popup__error" />
    </PopupWithForm>
  );
}
