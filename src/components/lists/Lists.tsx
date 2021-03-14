import React from "react";
import * as s from "./Lists.styled";
import { List } from "./components/list";
import { Button } from "../ui-elements/Button";
import { ItitialData } from "../../App";

interface Props {
  state: ItitialData;
}

export const Lists: React.FC<Props> = ({ state }): React.ReactElement => {
  return (
    <s.Container>
      {state.columnOrder.map((columnId: string) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId: any) => state.tasks[taskId]);

        return <List key={column.id} columnProp={column} tasksProp={tasks} />;
      })}
      <Button height="100%">Add new Column</Button>
    </s.Container>
  );
};
