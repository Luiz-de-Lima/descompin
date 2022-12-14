import React from 'react'
import ModalBS from 'react-bootstrap/Modal'
import { Button } from '../Button/Button'


export const Modal = ({ title, children, open, controls = [],onHide }) => {
  return (
    <div
      className="modal show"
      style={{ display: open ? 'block' : 'none', position: 'initial' }}
    >
      <ModalBS show={open} onHide={onHide}>
        <ModalBS.Header closeButton>
          <ModalBS.Title>{title}</ModalBS.Title>
        </ModalBS.Header>

        <ModalBS.Body>
          <p>{children}</p>
        </ModalBS.Body>

        <ModalBS.Footer>
          {controls.map((control, controlIndex) => (
            <Button
              key={controlIndex}
              {...control} />

          ))}
        </ModalBS.Footer>
      </ModalBS>
    </div>

  )
}
