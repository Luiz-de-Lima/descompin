import React from 'react'
import { Modal } from '../../components/Modal/Modal'
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Row } from 'react-bootstrap';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext'
import { closeModalAction } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
  const { dispatch } = useAppContext()
  const handleClose = () => {
    dispatch(closeModalAction())
  }
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
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Cras justo odio</Col>
            <Col xs={4} className='text-end'>
              <Button label='Salvar' loadingLabel='Salvando' />
            </Col>

          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Cras justo odio</Col>
            <Col xs={4} className='text-end'>
              <Button label='Salvar' loadingLabel='Salvando' />
            </Col>

          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={8}>Cras justo odio</Col>
            <Col xs={4} className='text-end'>
              <Button label='Salvar' loadingLabel='Salvando' />
            </Col>

          </Row>
        </ListGroup.Item>

      </ListGroup>
    </Modal>
  )
}
