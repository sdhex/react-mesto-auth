/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick, onCardDelete, onCardLike }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `gallery__like ${
    isLiked && 'gallery__like_active'
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="gallery__item">
      {isOwn && (
        <button
          className="gallery__remove"
          type="button"
          aria-label="удалить"
          onClick={handleDeleteClick}
        />
      )}
      <img
        className="gallery__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="gallery__description">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
            aria-label="лайк"
          />
          <span className="gallery__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
