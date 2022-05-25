import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import api from "../../services/api";
import Button from "../Button/button";
import Input from "../Input/input";
import { ContainerForm, Title } from "./styledRegisterTecnologi";

const RegisterTecnologi = ({ atualizar, onClose = () => {} }) => {
  const { register, handleSubmit, reset } = useForm();

  const [atualiza, setAtualiza] = useState(false);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  // useEffect(() => {
  //   () => onClose();
  // }, [handleSubmit]);

  const execulta = ({ title, status }) => {
    atualizar();
    addTecnologi(title, status);
  };

  const addTecnologi = (title, status) => {
    //console.log(title);
    //console.log(status);
    api
      .post(
        "/users/techs",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        toast.success("Tecnologia Adicionada");
        reset();
        return onClose();
      })
      .catch((err) => toast.error("Erro ao criar tecnolgoia"));
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(execulta)}>
        <Title>
          <span>Cadastrar Tecnologia</span>
          <Button onClick={onClose()}>X</Button>
        </Title>
        <Input
          label="Nome"
          name="title"
          placeholder="Informe a tecnologia"
          error=""
          register={register}
        />
        <select name="nível" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <Button type="submit">Cadastrar Tecnologia</Button>
      </form>
    </ContainerForm>
  );
};

export default RegisterTecnologi;
