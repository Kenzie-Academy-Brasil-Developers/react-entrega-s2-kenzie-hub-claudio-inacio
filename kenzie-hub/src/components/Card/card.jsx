import { useState } from "react";
import EditTecnologi from "../EditTecnologi/edit";
import { Container, ContainerCard, EditContainer } from "./styleCard";
import { BsFillTrashFill } from "react-icons/bs";

const Card = ({ name, status, id, exclusao, fechar }) => {
  const [showElement, setShowelement] = useState(false);
  const showOrHide = () => {
    setShowelement(!showElement);
    fechar();
  };

  console.log(id);

  return (
    <Container>
      <ContainerCard>
        <div onClick={showOrHide}>
          <p>{name}</p>
          <p>{status}</p>
        </div>
        <BsFillTrashFill onClick={() => exclusao(id)} />
      </ContainerCard>
      {showElement ? (
        <EditContainer>
          <EditTecnologi
            onClose={showOrHide}
            nome={name}
            id={id}
            nivel={status}
          />
        </EditContainer>
      ) : null}
    </Container>
  );
};

export default Card;
