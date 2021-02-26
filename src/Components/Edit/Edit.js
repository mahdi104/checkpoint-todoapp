import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/Actions/listTasks";
import { Button, Modal } from "react-bootstrap";

const Edit = ({ task }) => {
  const [show, setShow] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    dispatch(editTask(task.id, newText));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;
