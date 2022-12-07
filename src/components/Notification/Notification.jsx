import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import './styles.css'

export const Notification = ({ message, variant, onClose }) => {
  const [close, setClose] = useState(false)
  return ReactDOM.createPortal(
    <div className='notification'>
      <Alert variant='success' dismissible onClose={onClose}>
        {message}
      </Alert>
    </div>
    ,
    document.body
  )
}
