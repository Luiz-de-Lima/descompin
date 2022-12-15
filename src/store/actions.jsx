import * as types from './types'
import * as pinService from '../services/pinservices'

export const openModalSavePinAction = () => ({
  type: types.openModalSavePinType
})

export const closeModalsAction = () => ({
  type: types.closeModalsType
})

export const fecthFoldersInitAction = () => ({
  type: types.fetchFoldersInitType
})
export const fecthFoldersSuccesstAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders
})


export const fecthFoldersAction = async (dispatch) => {
  dispatch(fecthFoldersInitAction())
  const folders = await pinService.getFolders()
  dispatch(fecthFoldersSuccesstAction(folders))
}