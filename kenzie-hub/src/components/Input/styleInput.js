import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
  height: 12%;
  margin: 15px;
`;

export const NameInput = styled.div`
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: left;
`;

export const InputContainer = styled.div`
  background-color: #343b41;
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  width: 100%;
  display: flex;
  transition: 0.4s;
  height: 30px;
  align-items: center;

  input {
    background-color: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    margin-left: 5px;
    color: var(--black);
    &::placeholder {
      color: black;
    }
  }

  svg {
    margin-left: 15px;
    margin-right: 5px;
    //color: black;
  }
`;
