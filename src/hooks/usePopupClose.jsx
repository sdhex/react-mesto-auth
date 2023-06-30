/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import React from 'react';

export function usePopupClose(isOpen, closePopup) {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleOverlay = (event) => {
      if (event.target && event.target.classList.contains('popup_opened')) {
        closePopup();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, closePopup]);
}