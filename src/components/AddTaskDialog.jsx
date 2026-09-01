import { createPortal } from "react-dom";

import Button from "./Button";
import Input from "./Input";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur">
      {/* DIALOG */}
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383e]">Nova tarefa</h2>
        <p className="mt-1 mb-4 text-sm text-[#9a9c9f]">
          Insira as informações abaixo
        </p>
        <div className="flex w-[336px] flex-col space-y-4 text-left">
          <Input placeholder="Insira o título" label="Título" id="title" />
          <Input placeholder="Horário" label="Horário" id="time" />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secundary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default AddTaskDialog;
