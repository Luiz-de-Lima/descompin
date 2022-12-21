import * as types from './types'
import * as pinService from '../services/pinservices'


const sleep = async (time) => {
  new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
export const openModalSavePinAction = (pinId) => ({
  type: types.openModalSavePinType,
  payload: pinId
})

export const openModalCreateFolderAction = () => ({
  type: types.openModalCreateFolderType
})

export const closeModalsAction = () => ({
  type: types.closeModalsType
})

export const fetchFoldersInitAction = () => ({
  type: types.fetchFoldersInitType
})


export const fecthFoldersSuccesstAction = (folders) => ({
  type: types.fetchFoldersSuccessType,
  payload: folders
})


export const fecthFoldersAction = async (dispatch) => {
  dispatch(fetchFoldersInitAction())
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


export const saveFolderAction = async (dispatch, folderName, pinId) => {
  dispatch(saveFoldersInitAction())
  await sleep(1000)

  const newFolder = await pinService.saveFolder(folderName)
  const folder = await pinService.savePinFolder(newFolder.id, pinId)
  dispatch(saveFolderSuccessAction(folder))
}



export const savePinInFolderInitAction = () => ({
  type: types.savePinInFolderInitType
})


export const savePinInFolderSuccessAction = (folders) => ({
  type: types.savePinInFolderSuccessType,
  payload: folders,
});

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {

  dispatch(savePinInFolderInitAction())
  await sleep(1000)
  await pinService.savePinFolder(folderId, pinId)
  const folders = await pinService.getFolders()
  dispatch(savePinInFolderSuccessAction(folders))
}

//-----**-----\\

export const fetchPinsInitAction = () => ({
  type: types.fetchPinsInitType
})

export const fetchPinsSuccessAction = (pinsData) => ({
  type: types.fetchPinsSuccessType,
  payload: pinsData
})

export const fetchPinsAction = async (dispatch) => {
  dispatch(fetchPinsInitAction())
  await sleep(1000)
  const pinsData = await pinService.getPins()
  dispatch(fetchPinsSuccessAction(pinsData))
}
