import styled from "styled-components";

export const Container = styled.div<{ isDraggingOver: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  text-align: center;
  border: 1px solid #dedddc;
  border-radius: 3px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "#ffefc4" : "#fcfbf7"};
  margin-right: 8px;
`;

export const Title = styled.h4`
  color: #383630;
  font-size: 16px;
  background-color: #fcebf7;
  padding: 10px 15px;
  border-radius: 5px;
`;
