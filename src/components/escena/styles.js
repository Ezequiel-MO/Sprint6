import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;
  justify-content: space-around;
  align-items: center;
  margin: 2rem;
`;

export const StyledButtons = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  width: 50%;
  padding: 1rem;
  font-size: larger;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  text-align: center;
  ${({ active }) =>
    active &&
    `
    background-color: pink;
  `}
`;
