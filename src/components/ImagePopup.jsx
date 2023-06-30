/* eslint-disable react/prop-types */
import { usePopupClose } from '../hooks/usePopupClose';

export default function ImagePopup({ card, isOpen, onClose }) {
  const className = `popup popup_view-image ${isOpen ? 'popup_opened' : ''}`;
  usePopupClose(isOpen, onClose);

  return (
    <div className={className}>
      <figure className="popup__figure">
        <img className="popup__image" src={card.link} alt={card.name} />
        <button
          className="popup__close-button popup__close-button_image"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        />
        <figcaption className="popup__image-title">{card.name}</figcaption>
      </figure>
    </div>
  );
}
