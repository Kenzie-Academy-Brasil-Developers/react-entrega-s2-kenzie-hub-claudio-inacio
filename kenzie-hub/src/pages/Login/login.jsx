import { Link } from "react-router-dom";
import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import { Container, ContainerForm, Informacoes } from "./styledLogin";

import { yupResolver } from "@hookform/resolvers/yup";
import { FiMail, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Login = ({ autenticacao, setAutenticacao }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email Inválido").required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Minimo de 8 digitos")
      .required("Campo Obrigatório"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { erros },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:id", JSON.stringify(user.id));
        setAutenticacao(true);
        return history.push("/usuario");
        console.log(response.data);
      })
      .catch((err) => toast.error("Email ou senha Inválidos"));
  };

  if (autenticacao) {
    return <Redirect to="/usuario" />;
  }

  return (
    <Container>
      <ContainerForm>
        <Informacoes>
          <h1>KenzieHub</h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              placeholder="Informe o email de Login"
              label="Email"
              type="email"
              name="email"
              register={register}
              icon={FiMail}
            />
            <Input
              placeholder="Informe sua senha"
              label="Senha"
              type="password"
              name="password"
              register={register}
              icon={FiLock}
            />

            <Button type="submit">Login</Button>
            <p>
              Não tem conta? <Link to="/cadastro">Faça seu Cadastro</Link>
            </p>
          </form>
        </Informacoes>
      </ContainerForm>
    </Container>
  );
};

export default Login;
