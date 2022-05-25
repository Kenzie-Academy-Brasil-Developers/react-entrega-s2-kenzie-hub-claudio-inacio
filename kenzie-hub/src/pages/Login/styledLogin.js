import { width } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  width: 100%;
  min-width: 376px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #1727c2,
    #2725cd,
    #3621d7,
    #441ce1,
    #5212eb
  );
`;

export const ContainerForm = styled.div`
  max-width: 100%;
`;

export const Informacoes = styled.div`
  width: 100%;
  min-width: 376px;
  height: 90vh;
  //background-color: var(--black);
  background: rgba(11, 11, 11, 0.77);
  padding: 50px;
  border-radius: 5px;
  color: white;

  h1 {
    margin-bottom: 100px;
    color: white;
    text-align: center;
  }

  form {
    margin: 15px;
    text-align: center;
  }
  button {
    margin-top: 60px;
    width: 80%;
  }
`;
