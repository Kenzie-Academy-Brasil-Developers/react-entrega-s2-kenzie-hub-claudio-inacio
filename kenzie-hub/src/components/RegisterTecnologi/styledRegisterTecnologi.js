import styled from "styled-components";

export const ContainerForm = styled.div`
  background-color: #212529;
  border-radius: 5px;
  min-width: 320px;
  width: 35%;
  height: 80vh;
  padding: 30px;
  //display: flex;

  select {
    margin: 20px;
    margin-top: 30px;
    background-color: #212529;
    padding: 10px;
    border-radius: 5px;
  }
  form {
    width: 100%;
    border-radius: 5px;
    //background-color: red;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    height: 100%;
    //padding: 0 25px;

    div {
      //padding: 5px;
    }
  }
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

  button {
    width: 100vh;
  }
`;
