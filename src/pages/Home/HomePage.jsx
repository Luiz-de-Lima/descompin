import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "../../components/Card/Card";
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { Notification } from "../../components/Notification/Notification";
import { CardContainer } from "../../containers/Card/CardContainer";
import { useAppContext } from "../../store/AppContext";
import { saveFolderSuccessType } from "../../store/types";
import { fetchPinsAction } from "../../store/actions";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedback, setShowFeedback] = useState(false);
  const pinsNormalized = state.pins.map((pin) => {
    return {
      ...pin,
      total: state.folders.filter((folder) => {
        return folder.pins.includes(pin.id);
      }).length,
    };
  });

  useEffect(() => {
    fetchPinsAction(dispatch);
  }, []);

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type]);

  return (
    <>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />
      {showFeedback && (
        <Notification
          message="Criado com sucesso"
          onClose={() => setShowFeedback(false)}
        />
      )}

      <Container fluid>
        <Row>
          {pinsNormalized.map((pins) => (
            <Col xs={12} md={2} key={pins.id}>
              <CardContainer {...pins} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
