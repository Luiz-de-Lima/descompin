import React from 'react'
import CardBS from 'react-bootstrap/Card';
import ButtonBS from 'react-bootstrap/Button';
import BadgeBs from 'react-bootstrap/Badge'



export const Card = ({ id, image, title, total, onClick }) => {

  return (
    <CardBS className="">
      <CardBS.Img src={image} alt="CardBS image" />
      <CardBS.ImgOverlay>
        <ButtonBS variant="primary" onClick={() => onClick(id)}>
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