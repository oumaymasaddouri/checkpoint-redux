import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { checkTask, deleteTask, editTask } from "../../JS/actions/Task";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Task = ({ task }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newText, setNewText] = useState(task.text);

  const dispatch = useDispatch();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleEdit = () => {
    if (newText) {
      dispatch(editTask(task.id, newText));
      setNewText("");
      handleClose();
    } else alert("error");
  };

  const handleDone = () => {
    dispatch(checkTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <div className={task.done && "done"}>{task.text}</div>
      <Button onClick={handleDone}>{!task.done ? "done" : "undone"}</Button>
      <Button onClick={handleOpen}>EDIT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <Button onClick={handleEdit}>SAVE</Button>
            <Button onClick={handleDelete}>GO BACK</Button>
          </Typography>
        </Box>
      </Modal>
      <Button onClick={handleDelete}>DELETE</Button>
    </div>
  );
};

export default Task;
