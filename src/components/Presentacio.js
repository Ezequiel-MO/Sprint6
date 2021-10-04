import { StyledPresentacioContainer, StyledEntryButton } from "./escena/styles";

const Presentacio = ({ handleClick }) => {
  return (
    <StyledPresentacioContainer>
      <h1>Benvingut al tutorial</h1>
      <h4>Prem el botó per començar a gaudir de la formació</h4>
      <StyledEntryButton onClick={handleClick}>
        Entrar a l'App
      </StyledEntryButton>
    </StyledPresentacioContainer>
  );
};

export default Presentacio;
