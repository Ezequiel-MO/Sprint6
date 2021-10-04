import styled from "styled-components";

export const StyledPresentacioContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledEntryButton = styled.button`
  font-size: larger;
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: pink;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ background }) =>
    `
    background-image: url(${background});
  `}
`;

export const StyledButtons = styled.div`
  width: 100%;
  margin: 2rem;
`;

export const StyledButton = styled.button`
  width: 50%;
  padding: 1rem;
  font-size: larger;
  cursor: pointer;
`;

export const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  text-align: center;
  ${({ active }) =>
    active
      ? `background-color: pink;`
      : `background-color:rgba(255,255,255,0.8)`}
`;
