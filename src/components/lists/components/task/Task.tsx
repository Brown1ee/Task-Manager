import React from "react";
import * as s from "./Task.styled";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../list";

interface Props {
  task: TaskType;
  index: number;
}

export const Task: React.FC<Props> = (props): React.ReactElement => {
  const { task, index } = props;

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: any, snapshot) => (
        <s.Container
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <s.Title key={`task-${task.title}`}>{task.title}</s.Title>
        </s.Container>
      )}
    </Draggable>
  );
};
