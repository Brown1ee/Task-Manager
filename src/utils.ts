interface IhandleMovingFromOneListToAnother {
  setState: () => void;
}

export const handleMovingFromOneListToAnother = (
  setState: any,
  start: any,
  source: any,
  finish: any,
  destination: any,
  draggableId: any,
  state: any
) => {
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = Array.from(finish.taskIds);
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

export const handleMovingTasksInOneList = (
  start: any,
  source: any,
  destination: any,
  draggableId: any,
  state: any,
  setState: any
) => {
  const newTaskIds = Array.from(start.taskIds);
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
