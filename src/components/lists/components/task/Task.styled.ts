import styled from "styled-components";

export const Container = styled.div<{ isDragging: boolean }>`
  max-width: 300px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ isDragging }) => (isDragging ? "#e1f7c1" : "#ededed")};
  border: 1px solid #f5f5f5;
  padding: 10px 15px;
  margin-top: 10px;
`;

export const Title = styled.h3``;
