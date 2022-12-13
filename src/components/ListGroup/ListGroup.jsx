import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Badge } from "react-bootstrap";

export const List = ({ items = [] }) => {
  return (
    <div>
      <ListGroup as="ul">
        {items.map((item, index) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{item.title}</div>
            </div>
            {item.total ? (
              <Badge bg="primary" pill>
                {item.total}
              </Badge>
            ) : null}

          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
