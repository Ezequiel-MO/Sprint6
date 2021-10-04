import {
  StyledContainer,
  StyledButtons,
  StyledButton,
  StyledDiv,
} from "./styles";

import { useState, useEffect } from "react";

const Escena = ({ data }) => {
  const [clicked, setClicked] = useState(0);
  const [activeImage, setActiveImage] = useState("/assets/1.jpg");

  useEffect(() => {
    setActiveImage(data[clicked].img);
  }, [clicked]);

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
    <StyledContainer background={activeImage}>
      <StyledButtons>
        <StyledButton onClick={decrement}>Anterior</StyledButton>
        <StyledButton onClick={increment}>Seguent</StyledButton>
      </StyledButtons>
      {data.map((item, index) => (
        <>
          <StyledDiv active={index === clicked} key={item}>
            {item.txt}
          </StyledDiv>
        </>
      ))}
    </StyledContainer>
  );
};

export default Escena;
