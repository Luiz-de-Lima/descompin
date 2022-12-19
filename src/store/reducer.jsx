import React from 'react'
import * as types from './types'

export const reducer = (state, action) => {
  switch (action.type) {

    case types.openModalSavePinType:
      return {
        ...state,
        type: types.openModalSavePinType,
        mode: 'savePin',
        activePinId: action.payload
      }
    case types.closeModalsType:
      return {
        ...state,
        type: types.closeModalsType,
        mode: null
      }
    case types.fetchFoldersInitType:
      return {
        ...state,
        type: types.fetchFoldersInitType
      }
    case types.fetchFoldersSuccessType:
      return {
        ...state,
        type: types.fetchFoldersSuccessType,
        folders: action.payload
      }
    case types.openModalCreateFolderType:
      return {
        ...state,
        type: types.openModalCreateFolderType,
        mode: 'createFolder'
      };
    case types.saveFolderSuccessType:
      return {
        ...state,
        types: types.saveFolderSuccessType,
        folders: [...state.folders, action.payload]
      }
    default:
      return { ...state, type: action.type }

  }
}
