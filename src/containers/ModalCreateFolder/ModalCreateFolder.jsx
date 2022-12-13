import React, { useState } from 'react'
import { Modal } from '../../components/Modal/Modal'
import Form from 'react-bootstrap/Form'


export const ModalCreateFolder = ({ open }) => {

  const [folderName, setFoldername] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('eses', folderName
    )
  }
  const handleChange = (e) => {
    setFoldername(e.target.value)
  }
  return (
    <Modal
      open={open}
      title='Criar Pasta'
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
