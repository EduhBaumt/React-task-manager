import "./AddTaskDialog.css";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";

import Button from "./Button";
import Input from "./Input";
import TimeSelect from "./TimeSelect";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const nodeRef = useRef();

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState("");

  const resetFields = () => {
    setTitle("");
    setTime("");
    setDescription("");
  };

  const handleSaveClick = () => {
    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    });
    handleClose();
    resetFields();
  };

  const handleCancelClick = () => {
    resetFields();
    handleClose();
  };

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            {/* DIALOG */}
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383e]">
                Nova tarefa
              </h2>
              <p className="mt-1 mb-4 text-sm text-[#9a9c9f]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4 text-left">
                <Input
                  placeholder="Insira o título"
                  label="Título"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  placeholder="Descreva a tarefa"
                  label="Descrição"
                  id="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <div className="flex gap-3">
                  <Button
                    size="large"
                    className="w-full"
                    variant="secundary"
                    onClick={handleCancelClick}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
