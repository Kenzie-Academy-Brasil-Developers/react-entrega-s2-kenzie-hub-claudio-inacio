import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import api from "../../services/api";
import Button from "../Button/button";
import Input from "../Input/input";
import { ButtonEdit, ContainerForm, Conteudo, Title } from "./styledEdit";

const EditTecnologi = ({ id, nome, nivel, onClose = () => {} }) => {
  const { register, handleSubmit } = useForm();

  const token = JSON.parse(localStorage.getItem("@KenzieHub:token")) || "";

  const editTecnologi = ({ status }) => {
    api
      .put(
        `/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Tecnologia Editada");
      })
      .catch((err) => toast.error("Erro ao Editar tecnlogia"));
  };

  //if (!autenticacao) {
  //  return <Redirect to="/login" />;
  //}
  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(editTecnologi)}>
        <Title>
          <span>Editar Tecnologia</span>
          <Button onClick={onClose}>X</Button>
        </Title>
        <Conteudo>
          <Input
            label="Nome"
            name="title"
            disabled="true"
            value={nome}
            error=""
            register={register}
          />
          <select name="nível" {...register("status")}>
            {nivel === "Iniciante" ? (
              <option value="Intermediario">Intermediario</option>
            ) : (
              <option value="Avançado">Avançado</option>
            )}
          </select>
          <ButtonEdit type="submit">Editar Tecnologia</ButtonEdit>
        </Conteudo>
      </form>
    </ContainerForm>
  );
};

export default EditTecnologi;
