import styled from "styled-components";
import Button from "../Button/button";

export const ContainerForm = styled.div`
  background-color: #212529;
  border-radius: 5px;
  min-width: 320px;
  width: 35%;
  height: 50vh;
  padding: 30px;
  //display: flex;

  form {
    max-width: 445px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 100%;

    div {
      //padding: 5px;
    }
  }
`;

export const ButtonEdit = styled(Button)`
  width: 400px;
  max-width: 100%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  background-color: var(--roxo);
  margin: -30px -30px 30px;
  padding: 0px 25px;
  color: white;

  span {
    color: white;
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;

  select {
    margin: 20px;
    margin-top: 30px;
    background-color: #212529;
    padding: 10px;
    border-radius: 5px;
  }

  button {
    width: 300px;
  }
`;
