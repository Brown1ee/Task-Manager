import styled from "styled-components";

export const Button = styled.button<{ height: string }>`
  width: 120px;
  background-color: #d1f542;
  font-weight: bold;
  height: ${({ height }) => height};
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: #cbed45;
  }
`;
