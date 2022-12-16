import * as types from './types'
import * as pinService from '../services/pinservices'

export const openModalSavePinAction = () => ({
  type: types.openModalSavePinType
})

export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType
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

//---*---\\

export const saveFoldersInitAction = () => ({
  type: types.saveFolderInitType
})


export const saveFolderSuccessAction = (folder) => ({
  type: types.saveFolderSuccessType,
  payload: folder
});


export const saveFolderAction = async (dispatch, folderName) => {
  dispatch(saveFoldersInitAction())
  const newFolder = pinService.saveFolder(folderName)
  dispatch(saveFolderSuccessAction(newFolder))
}



