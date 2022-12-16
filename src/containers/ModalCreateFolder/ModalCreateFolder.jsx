import React, { useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import Form from 'react-bootstrap/Form'
import { useAppContext } from '../../store/AppContext'
import { closeModalsAction, saveFolderAction } from '../../store/actions'


export const ModalCreateFolder = ({ open }) => {
  const { dispatch } = useAppContext()
  const [folderName, setFoldername] = useState('')

  const handleClose = () => {
    dispatch(closeModalsAction())
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    saveFolderAction(dispatch, folderName)
    handleClose()
  }
  const handleChange = (e) => {
    setFoldername(e.target.value)
  }

  return (
    <Modal
      open={open}
      title='Criar Pasta'
      onHide={handleClose}
      controls={[{
        label: 'Criar e Salvar',
        loadingLabel: 'Salvando',
        loading: false,
        type: 'submit',
        variant: 'secondary',
        form: 'form-criar-pasta',
      }]}>
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da Pasta</Form.Label>
          <Form.Control type="text" placeholder="Ex: Matemática" value={folderName} onChange={handleChange} />
        </Form.Group>
      </Form>
    </Modal>
  )
}
