import React, { useEffect } from 'react'
import { Modal } from '../../components/Modal/Modal'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext'
import { closeModalsAction } from '../../store/actions';
import { fecthFoldersAction } from '../../store/actions'

export const ModalSavePin = ({ open }) => {
  const { state, dispatch } = useAppContext()
  const handleClose = () => {
    dispatch(closeModalsAction())
  }
  useEffect(() => {
    fecthFoldersAction(dispatch)
  }, [])
  return (
    <Modal
      title='Salvar pin'
      open={open}
      onHide={handleClose}
      controls={[{
        label: 'criar pasta', variant: 'primary',
        loading: false,
        loadingLabel: 'teste',
        onClick: () => console.log("save pin")
      }]}>
      <ListGroup variant="flush">
        {state.folders.map((folder, folderIndex) => (
          <ListGroup.Item key={folderIndex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className='text-end'>
                <Button label='Salvar' loadingLabel='Salvando' />
              </Col>

            </Row>
          </ListGroup.Item>
        ))}

      </ListGroup>
    </Modal>
  )
}
