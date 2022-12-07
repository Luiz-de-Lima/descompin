import React from 'react'
import CardBS from 'react-bootstrap/Card';
import ButtonBS from 'react-bootstrap/Button';
import BadgeBs from 'react-bootstrap/Badge'
import paisagem from '../../assets/paisagem.jpg'
export const Card = ({ imagem, title, total }) => {
  return (
    <CardBS className="">
      <CardBS.Img src={paisagem} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <ButtonBS variant="primary">
          Salvar <BadgeBs bg="secondary">{total}</BadgeBs>
          <span className="visually-hidden">unread messages</span>
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