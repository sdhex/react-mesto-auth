/* eslint-disable react/prop-types */
import { usePopupClose } from '../hooks/usePopupClose';

export default function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) {
  const className = `popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`;

  usePopupClose(isOpen, onClose);

  return (
    <div className={className}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button
          className="popup__close-button"
          onClick={onClose}
          type="button"
          aria-label="закрыть"
        />
        <form
          className={`popup__form popup__form_type_${name}`}
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button
            className="popup__button"
            type="submit"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
