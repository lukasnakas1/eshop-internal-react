import { Modal, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";

const CarDetailsModal = ({ show, closeModal, onSubmit, modalBody, action }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header>
        <h2>Car Details</h2>
      </Modal.Header>
      <Modal.Body>{modalBody}</Modal.Body>
      <Modal.Footer>
        <Row className="w-100 justify-content-between">
          <Col xs={3}>
            <Button variant="outlined" onClick={closeModal}>
              Cancel
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="contained" onClick={onSubmit}>
              {action}
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default CarDetailsModal;
