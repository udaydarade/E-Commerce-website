import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { colors } from "@mui/material";

interface Props {
  page: string;
  message: string;
  action: string;
  grad: string;
  onHide: () => void;
  show: boolean;
}

function Confirm({ page, message, action, grad, onHide, show }: Props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(page);
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body className="d-flex flex-column align-items-center justify-content-around">
      <video
            src="\images\Animation - 1710744632878.mp4"
            autoPlay
            muted
          ></video>
          <div className="d-flex flex-column align-items-center">
            <h3 className="fw-bolder fs-1" style={{color:'#000'}}>{message}</h3>
            <Card.Text style={{color:'#000'}}>{grad}</Card.Text>
            <Button style={{color:'#000'}} onClick={handleClick} variant="warning" className="fw-bold">
                {action}
            </Button>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default Confirm;
