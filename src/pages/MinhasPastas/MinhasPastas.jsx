import React from "react";
import { Container } from "react-bootstrap";
import { List } from "../../components/ListGroup/ListGroup";

export const MinhasPastas = () => {
  return (
    <Container>
      <h1>Minhas Pastas</h1>
      <List
        items={[
          { title: "teste", total: 5 },
          { title: "teste", total: 5 },
          { title: "teste", total: 5 },
        ]}
      />
    </Container>
  );
};
