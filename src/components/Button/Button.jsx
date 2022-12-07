import React from 'react'
import ButtonBS from 'react-bootstrap/Button'
import { Spinner } from 'react-bootstrap'

export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {

  return (
    <ButtonBS {...buttonProps} >
      {loading && (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          >
            <span className="visually-hidden">...loading</span>
          </Spinner>
          {' '}
        </>

      )}
      {loading ? loadingLabel : label}
    </ButtonBS >
  )
}
