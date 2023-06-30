/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';
import { AppContext } from '../contexts/AppContext';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const { values, handleChange, setValues } = useForm({});
  const isLoading = React.useContext(AppContext).isLoading;

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.cardName,
      link: values.cardUrl,
    });
  }

  React.useEffect(() => {
    setValues({
      name: '',
      link: '',
    });
  }, [isOpen, setValues]);

  return (
    <PopupWithForm
      name="add-image"
      title="Новое место"
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_gallery-title"
        placeholder="Название"
        name="cardName"
        type="text"
        required
        minLength="2"
        maxLength="30"
        id="input-gallery-title"
        onChange={handleChange}
        value={values.cardName ?? ''}
      />
      <span id="input-gallery-title-error" className="popup__error" />
      <input
        className="popup__input popup__input_type_gallery-link"
        placeholder="Ссылка на картинку"
        name="cardUrl"
        type="url"
        id="input-gallery-link"
        required
        onChange={handleChange}
        value={values.cardUrl ?? ''}
      />
      <span id="input-gallery-link-error" className="popup__error" />
    </PopupWithForm>
  );
}
