import React from 'react'
import * as types from './types'

export const reducer = (state, action) => {
  switch (action.type) {
    case types.openModalSavePinType:
      return {
        ...state,
        mode: 'savePin'
      }
    case types.closeModalsType:
      return {
        ...state,
        mode: null
      }
    default:
      return state
  }
}
