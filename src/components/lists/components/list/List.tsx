import React, { useState } from "react";
import * as s from "./List.styled";
import { Task } from "../task";
import { Droppable } from "react-beautiful-dnd";
import { Button } from "../../../ui-elements/Button";
import { ModalCreateTask } from "../../../modals/modal-create-task";

interface Props {
  columnProp: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasksProp: {
    id: string;
    content: string;
    title: string;
    description: string;
    status: string;
  }[];
}

export type TaskType = {
  id: string;
  content: string;
  title: string;
  description: string;
  status: string;
};

export const List: React.FC<Props> = (props): React.ReactElement => {
  const { columnProp, tasksProp } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Droppable droppableId={columnProp.id}>
      {(provided: any, snapshot) => (
        <s.Container
          isDraggingOver={snapshot.isDraggingOver}
          key={`list-${columnProp.title}`}
        >
          <s.Title>{columnProp.title}</s.Title>
          <Button onClick={handleOpen}>Create Task</Button>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasksProp.map((suitedTask: TaskType, index: number) => (
              <Task
                key={`${suitedTask.title}`}
                task={suitedTask}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>

          <ModalCreateTask open={open} handleClose={handleClose} />
        </s.Container>
      )}
    </Droppable>
  );
};
