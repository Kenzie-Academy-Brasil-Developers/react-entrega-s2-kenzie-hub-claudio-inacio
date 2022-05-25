import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-image: linear-gradient(
    to right bottom,
    #1727c2,
    #2725cd,
    #3621d7,
    #441ce1,
    #5212eb
  );
  height: 100vh;
  min-width: 270px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Conteudo = styled.div`
  //background-color: black;
  background: rgba(255, 255, 255, 0.15);
  width: 50vh;
  height: 70vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  min-height: 70vh;
  h1 {
    color: white;
  }

  button {
    width: 100%;
  }
  span {
    color: var(--roxo);
  }
`;
