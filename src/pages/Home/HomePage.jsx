import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card } from '../../components/Card/Card'
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavePin'
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder'
import { Notification } from '../../components/Notification/Notification'
import { CardContainer } from '../../containers/Card/CardContainer'
import { useAppContext } from '../../store/AppContext'

export const HomePage = () => {
  const { state, dispatch } = useAppContext()

  return (
    <>
      <ModalSavePin open={state.mode === 'savePin'} />
      <ModalCreateFolder open={false} />
      <Notification message='Criado com sucesso'
        onClose={() => console.log('clicou')} />
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <CardContainer title='matematica' total={0} imagem={'https://pixabay.com/pt/photos/cachorro-canino-bicho-de-estima%c3%a7%c3%a3o-5040008/'} />
          </Col>
          <Col xs={12} md={2}>
            <CardContainer title='trigonometria' total={0} imagem={'https://pixabay.com/pt/photos/cachorro-canino-bicho-de-estima%c3%a7%c3%a3o-5040008/'} />
          </Col>
        </Row>
      </Container>
    </>

  )
}