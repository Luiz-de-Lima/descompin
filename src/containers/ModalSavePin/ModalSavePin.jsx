import React, { useEffect, useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext'
import { closeModalsAction, openModalCreateFolderAction, fecthFoldersAction, savePinInFolderAction } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext()
  const [itemsLoading, setItemsLoading] = useState({})
  const handleClose = () => {
    dispatch(closeModalsAction())
  }
  const handleCreateFolder = () => {
    console.log('teste')
    dispatch(openModalCreateFolderAction())
  }
  const handleClick = async (folderId) => {
    setItemsLoading((prevState) => {
      return { ...prevState, [folderId]: true }
    })

    await savePinInFolderAction(dispatch, state.activePinId, folderId)
    setItemsLoading((prevState) => {
      return {
        ...prevState,
        [folderId]: false
      }
    })
  }
  const folderNormalized = state.folders.map((folder) => {
    return ({
      ...folder,
      saved: folder.pins.includes(state.activePinId)
    })
  })
  useEffect(() => {
    fecthFoldersAction(dispatch)
    console.log(state)
  }, [])

  return (
    <Modal
      title='Salvar pin'
      open={open}
      onHide={handleClose}
      controls={[{
        label: 'criar pasta',
        variant: 'primary',
        loading: false,
        loadingLabel: 'teste',
        onClick: () => handleCreateFolder()
      }]}>
      <ListGroup variant="flush">
        {folderNormalized.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className='text-end'>
                <Button
                  label={folder.saved ? 'Salvo' : 'Salvar'}
                  loadingLabel='Salvando'
                  onClick={() => handleClick(folder.id)}
                  variant={folder.saved ? 'secondary' : 'primary'}
                  disabled={folder.saved}
                  loading={itemsLoading[folder.id]} />
              </Col>

            </Row>
          </ListGroup.Item>
        ))}

      </ListGroup>
    </Modal>
  )
}
