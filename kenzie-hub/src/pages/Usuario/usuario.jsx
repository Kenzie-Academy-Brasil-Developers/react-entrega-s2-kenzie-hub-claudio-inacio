import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button/button";
import Card from "../../components/Card/card";
import Input from "../../components/Input/input";
import RegisterTecnologi from "../../components/RegisterTecnologi/registerTecnologi";
import api from "../../services/api";
import {
  CardContainer,
  Container,
  EditContainer,
  TecnologiContainer,
  TitleTecnologi,
} from "./styleUsuario";

const PainelUser = ({ autenticacao, setAutenticacao }) => {
  const [usuario, setUsuario] = useState();
  const [id] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:id")) || ""
  );
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || "";

  const history = useHistory();

  const navigation = (path) => {
    return history.push(path);
  };

  const [showElement, setShowelement] = useState(false);
  const showOrHide = () => setShowelement(!showElement);
  const atualizaLista = () => setAtualiza(!atualiza);
  const [atualiza, setAtualiza] = useState(false);

  const loadTarefas = () => {
    api.get(`/users/${id}`).then((response) => {
      setUsuario(response.data);
    });
  };
  useEffect(() => {
    loadTarefas();
  }, [showElement]);

  useEffect(() => {
    loadTarefas();
  }, [usuario]);

  const excluiTecnologia = (id) => {
    api
      .delete(
        `/users/techs/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Tecnologia Excluida");
        return loadTarefas();
      })
      .catch((err) => toast.error("Erro ao Excluir tecnlogia"));
  };

  const sair = () => {
    localStorage.removeItem("@KenzieHub:id");
    localStorage.removeItem("@KenzieHub:token");
    setAutenticacao();
  };

  if (!autenticacao) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <header>
        <h1>
          Kenzie<span>Hub</span>
        </h1>
        <Button onClick={() => sair()}>Sair</Button>
      </header>

      <aside>
        <h2>Olá, {usuario?.name}</h2>
        <p>{usuario?.course_module}</p>
      </aside>
      <TecnologiContainer>
        <TitleTecnologi>
          <p>Tecnologias</p>
          <Button onClick={showOrHide}>+</Button>
        </TitleTecnologi>
        <CardContainer>
          {usuario?.techs?.map((tech) => (
            <Card
              key={tech.id}
              name={tech.title}
              status={tech.status}
              //usuario={usuario.title}
              id={tech.id}
              fechar={atualizaLista}
              exclusao={excluiTecnologia}
            />
          ))}
        </CardContainer>
      </TecnologiContainer>

      {showElement ? (
        <EditContainer>
          <RegisterTecnologi
            autenticacao={autenticacao}
            onClose={() => showOrHide}
            atualizar={atualizaLista}
          />
        </EditContainer>
      ) : null}
    </Container>
  );
};

export default PainelUser;
