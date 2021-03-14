import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Lists } from "./components/lists";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import initialData from "./mockData/initialData";
import {
  handleMovingFromOneListToAnother,
  handleMovingTasksInOneList,
} from "./utils";
import * as s from "./App.styled";

interface Props {}

export interface ItitialData {
  tasks: {
    [task: string]: {
      id: string;
      content: string;
      title: string;
      description: string;
      status: string;
    };
  };
  columns: {
    [column: string]: {
      id: string;
      title: string;
      taskIds: string[];
    };
  };
  columnOrder: string[];
}

const App: React.FC<Props> = (props): React.ReactElement => {
  const [state, setState] = useState<ItitialData>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      return handleMovingTasksInOneList({
        finish,
        start,
        source,
        destination,
        draggableId,
        state,
        setState,
      });
    }

    return handleMovingFromOneListToAnother({
      setState,
      start,
      source,
      finish,
      destination,
      draggableId,
      state,
    });
  };
  return (
    <Container maxWidth="lg">
      <DragDropContext onDragEnd={onDragEnd}>
        <s.Title>Task Manager</s.Title>
        <Lists state={state} />
      </DragDropContext>
    </Container>
  );
};

export default App;
