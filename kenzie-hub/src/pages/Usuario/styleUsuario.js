import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  padding: 0px;

  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #1727c2,
    #2725cd,
    #3621d7,
    #441ce1,
    #5212eb
  );

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    //background-color: red;
    width: 100%;
  }
  button {
    min-width: 10%;
    max-width: 15%;
  }
  aside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 35px;
    width: 100%;
    // background-color: yellow;
  }
  h1 {
    color: white;
  }

  span {
    color: #212529;
  }
`;

export const TecnologiContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 63%;
  color: white;
  font-weight: bold;
  button {
    width: 1px;
    height: 100%;
  }
`;

export const TitleTecnologi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardContainer = styled.div`
  background-color: #212529;
  max-height: 350px;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 25px;
  margin-top: 15px;
  border-radius: 5px;
  flex-direction: column;
  overflow-y: scroll;
  color: white;

  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    // background: orange; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: black; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid black; /* creates padding around scroll thumb */
  }
`;

export const EditContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
