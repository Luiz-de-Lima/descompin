import React from 'react'
import CardBS from 'react-bootstrap/Card';
import ButtonBS from 'react-bootstrap/Button';
import BadgeBs from 'react-bootstrap/Badge'
import paisagem from '../../assets/paisagem.jpg'


export const Card = ({ imagem, title, total, onClick }) => {

  return (
    <CardBS className="">
      <CardBS.Img src={paisagem} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <ButtonBS variant="primary" onClick={onClick}>
          Salvar <BadgeBs bg="secondary">{total}</BadgeBs>
        </ButtonBS>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>
          {title}
        </CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );

}