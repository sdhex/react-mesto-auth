/* eslint-disable react/prop-types */
import { usePopupClose } from '../hooks/usePopupClose';
import success from '../images/success.svg';
import failure from '../images/failure.svg';

export default function InfoToolTip({ isOpen, onClose, isAuthSuccess }) {
  const className = `popup popup__tooltip
   ${isOpen ? 'popup_opened' : ''}`;

  usePopupClose(isOpen, onClose);

  return (
    <div className={className}>
      <div className="popup__container">
        <img
          className="popup__tooltip-icon"
          src={isAuthSuccess ? success : failure}
          alt="иконка статуса"
        />
        <h2 className="popup__tooltip-response">
          {isAuthSuccess
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз'}
        </h2>
        <button
          className="popup__close-button"
          onClick={onClose}
          type="button"
          aria-label="закрыть"
        />
      </div>
    </div>
  );
}
