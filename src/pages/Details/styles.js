import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  
  display: grid;
  grid-template-rows: 10.4rem auto;
  grid-template-areas: 
  "header"
  "content"
  "footer";
`;

export const Content = styled.div`
  max-width: 136.8rem;
  height: 100%;
  padding-inline: 4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;

  @media (min-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-inline: 12.3rem;
    gap: 4rem;
  }
`;