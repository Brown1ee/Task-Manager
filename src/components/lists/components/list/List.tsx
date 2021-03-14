import React from "react";
import * as s from "./List.styled";
import { Task } from "../task";
import { Droppable } from "react-beautiful-dnd";
import { Button } from "../../../ui-elements/Button";

interface Props {
  columnProp: any;
  tasksProp: any;
}

export const List: React.FC<Props> = (props): React.ReactElement => {
  const { columnProp, tasksProp } = props;

  return (
    <Droppable droppableId={columnProp.id}>
      {(provided: any, snapshot) => (
        <s.Container
          isDraggingOver={snapshot.isDraggingOver}
          key={`list-${columnProp.title}`}
        >
          <s.Title>{columnProp.title}</s.Title>
          <Button>Create Task</Button>
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasksProp.map((suitedTask: any, index: number) => (
              <Task
                key={`${suitedTask.title}`}
                task={suitedTask}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        </s.Container>
      )}
    </Droppable>
  );
};
