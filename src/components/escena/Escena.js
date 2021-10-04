import { StyledContainer, StyledDiv } from "../styles";

const Escena = ({ data }) => {
  return (
    <StyledContainer>
      {data.map((item) => (
        <StyledDiv key={item}>{item}</StyledDiv>
      ))}
    </StyledContainer>
  );
};

export default Escena;
