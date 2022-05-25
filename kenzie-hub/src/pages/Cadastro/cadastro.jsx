import Button from "../../components/Button/button";
import Input from "../../components/Input/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, ContainerForm, Informaceos } from "./styleCadastro";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiBook,
  FiCodepen,
} from "react-icons/fi";
import api from "../../services/api";

const Cadastro = ({ autenticacao }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Minimo 8 digitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const aluno = { name, email, password, bio, contact, course_module };
    api
      .post("/users", aluno)
      .then((_) => {
        toast.success("Sucesso ao criar a conta");
        return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta!"));
  };
  const navigation = (path) => {
    return history.push(path);
  };

  if (autenticacao) {
    return <Redirect to="/usuario" />;
  }

  return (
    <Container>
      <ContainerForm>
        <Informaceos>
          <h2>KENZIE HUB</h2>
          <Button onClick={() => navigation("/")}>Voltar</Button>
        </Informaceos>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro de Aluno</h1>
          <span>Registro grátis, vamos nessa</span>
          <Input
            error={errors.name?.message}
            label="Nome"
            icon={FiUser}
            placeholder="Digite seu nome"
            name="name"
            register={register}
          />
          <Input
            error={errors.email?.message}
            label="Email"
            icon={FiMail}
            placeholder="Digite aqui seu email"
            name="email"
            register={register}
          />
          <Input
            error={errors.password?.message}
            label="Senha"
            icon={FiLock}
            placeholder="Digite sua senha"
            name="password"
            type="password"
            register={register}
          />
          <Input
            error={errors.confirmPassowrd?.message}
            label="Confirmar senha"
            icon={FiLock}
            placeholder="Confire sua senha"
            name="confirmPassword"
            register={register}
            type="password"
          />
          <Input
            error={errors.course_module?.message}
            label="Modulo"
            icon={FiCodepen}
            placeholder="Digite seu modulo"
            name="course_module"
            register={register}
          />
          <Input
            error={errors.bio?.message}
            label="Bio"
            icon={FiBook}
            placeholder="Coloque suas informações"
            name="bio"
            register={register}
          />
          <Input
            error={errors.contact?.message}
            label="Contato"
            icon={FiPhone}
            placeholder="Digite seus contatos"
            name="contact"
            register={register}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </ContainerForm>
    </Container>
  );
};

export default Cadastro;
