import React from 'react';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { Card } from '../../models/unsplash';

interface ModalProps {
  visible: boolean;
  toggle: () => void;
  item: Card;
}
export const Modal = ({ visible, toggle, item }: ModalProps) =>
  visible
    ? createPortal(
        <div className="" data-testid="modal">
          <div className="modal-pop" role="dialog" aria-modal="true">
            <div className="modal-title">
              <button type="button" onClick={toggle}>
                x
              </button>
              <p className="modal-title-id">ID: {item.id || 'No id'}</p>
              <p className="modal-title-desc" title={item.description}>
                {item.description}
              </p>
            </div>
            <img
              style={{ aspectRatio: item.width / item.height }}
              src={item.urls.small}
              alt={item.alt_description}
            ></img>

            <p>Description: {item.alt_description || 'No alt description'}</p>
            <div className="date-content">
              <p>
                Created: <span>{item.created_at.slice(0, 10)}</span>
              </p>
              <p>
                Updated: <span>{item.updated_at.slice(0, 10)}</span>
              </p>
            </div>
            <p>Hash: {item.blur_hash || 'No description'}</p>
            <p>👍{item.likes}</p>

            <div className="username-content">
              <p>👤 {item.user.instagram_username || 'no username'}</p>
              <p>😉 {item.user.name}</p>
              <p>🌏 {item.user.location || 'no location'}</p>
            </div>
          </div>
          <div className="modal-overlay"></div>
        </div>,
        document.body
      )
    : null;
