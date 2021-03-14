import { ItitialData } from "./App";
import { DraggableLocation } from "react-beautiful-dnd";

interface IhandleMovingFromOneListToAnother {
  setState: (state: ItitialData) => void;
  start: {
    id: string;
    title: string;
    taskIds: string[];
  };
  source: DraggableLocation;
  finish: {
    id: string;
    title: string;
    taskIds: string[];
  };
  destination: DraggableLocation;
  draggableId: string;
  state: ItitialData;
}

export const handleMovingFromOneListToAnother: (
  props: IhandleMovingFromOneListToAnother
) => void = ({
  setState,
  start,
  source,
  finish,
  destination,
  draggableId,
  state,
}) => {
  const startTaskIds = [...start.taskIds];
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = [...finish.taskIds];
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  const newState = {
    ...state,
    columns: {
      ...state.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };
  setState(newState);
};

export const handleMovingTasksInOneList: (
  props: IhandleMovingFromOneListToAnother
) => void = ({ start, source, destination, draggableId, state, setState }) => {
  const newTaskIds = [...start.taskIds];
  newTaskIds.splice(source.index, 1);
  newTaskIds.splice(destination.index, 0, draggableId);

  const newColumn = {
    ...start,
    taskIds: newTaskIds,
  };

  const newState = {
    ...state,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn,
    },
  };

  setState(newState);
  return;
};
