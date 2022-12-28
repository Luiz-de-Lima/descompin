import React from "react";
import { Container } from "react-bootstrap";
import { List } from "../../components/ListGroup/ListGroup";
import { useAppContext } from "../../store/AppContext";

const adapterItems = (items) => {
  return items.map(item => ({
    title: item.name,
    total: item.pins.length
  }))
}

export const MinhasPastas = () => {
  const { state } = useAppContext();

  return (
    <Container>
      <List
        items={adapterItems(state.folders)}
      />
    </Container>
  );
};
