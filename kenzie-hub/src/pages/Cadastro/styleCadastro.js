import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  background-image: linear-gradient(
    to right bottom,
    #1727c2,
    #2725cd,
    #3621d7,
    #441ce1,
    #5212eb
  );
  justify-content: center;
  display: flex;
`;

export const Informaceos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  width: 100%;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #1727c2,
    #2725cd,
    #3621d7,
    #441ce1,
    #5212eb
  );
  margin-bottom: -25px;

  h2 {
    font-size: 16px;
  }
`;

export const ContainerForm = styled.div`
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  width: 400px;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  //background-color: #212529;
  background: rgba(11, 11, 11, 0.77);
  margin-bottom: 15px;

  span {
    //color: black;
  }
  form {
    margin-top: 35px;
    width: 90%;
    text-align: center;
    //background-color: #212529;
    //background: rgba(11, 11, 11, 0.77);
    height: 100%;
    overflow: hidden;
  }
  h1 {
    margin-bottom: 15px;
    font-size: 25px;
  }
  p {
    margin-top: 8px;
  }
  a {
    font-weight: bold;
    color: var(--roxo);
  }
`;
