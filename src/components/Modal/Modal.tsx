import React from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';

interface ModalProps {
  visible: boolean;
  toggle: () => void;
}
export const Modal = ({ visible, toggle }: ModalProps) =>
  visible
    ? createPortal(
        <div className="" data-testid="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <h3>Hello World</h3>
            <p>
              Et sit saepe velit tenetur et consequatur in. Nihil doloribus nulla nulla rem. Soluta
              illo et asperiores numquam earum nesciunt. Vero odio voluptatem sunt sunt laboriosam.
            </p>
            <button type="button" onClick={toggle}>
              Close
            </button>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;
