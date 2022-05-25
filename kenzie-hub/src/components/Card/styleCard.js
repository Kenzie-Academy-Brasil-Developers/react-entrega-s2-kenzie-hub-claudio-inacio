import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 80%;
  height: 60px;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  margin: auto;
  padding: 3px;
  margin-bottom: 5px;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
`;

export const EditContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  //background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
