/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const cardsElements = cards.map((card) => (
    <Card card={card} onCardClick={onCardClick} key={card._id} onCardLike={onCardLike} onCardDelete={onCardDelete} />
  ))

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            alt="аватар"
            src={currentUser.avatar}
          />
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="открыть редактирование аватара"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="открыть редактирование профиля"
            onClick={onEditProfile}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить карточку места"
          onClick={onAddPlace}
        />
      </section>
      <section className="gallery" aria-label="галерея">
        {cardsElements}
      </section>
    </main>
  );
}
