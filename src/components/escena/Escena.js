import {
  StyledContainer,
  StyledButtons,
  StyledButton,
  StyledDiv,
} from "./styles";

import { useState } from "react";

const Escena = ({ data }) => {
  const [clicked, setClicked] = useState(0);

  const decrement = () => {
    if (clicked > 0) {
      setClicked((prevState) => prevState - 1);
    } else setClicked(data.length - 1);
  };

  const increment = () => {
    if (clicked < data.length - 1) {
      setClicked((prevState) => prevState + 1);
    } else setClicked(0);
  };

  return (
    <StyledContainer>
      <StyledButtons>
        <StyledButton onClick={decrement}>Anterior</StyledButton>
        <StyledButton onClick={increment}>Seguent</StyledButton>
      </StyledButtons>
      {data.map((item, index) => (
        <StyledDiv active={index === clicked} key={item}>
          {item}
        </StyledDiv>
      ))}
    </StyledContainer>
  );
};

export default Escena;
