import React from 'react'
import ModalBS from 'react-bootstrap/Modal'
import { Button } from '../Button/Button'


export const Modal = ({ title, children, open, controls = [] }) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <ModalBS.Dialog show={open}>
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
      </ModalBS.Dialog>
    </div>

  )
}
