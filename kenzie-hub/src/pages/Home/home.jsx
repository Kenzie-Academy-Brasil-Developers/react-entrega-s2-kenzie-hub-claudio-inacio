import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button/button";
import { Container, Conteudo } from "./homeStyle";

const Home = ({ autenticacao }) => {
  const history = useHistory();

  const navegation = (path) => {
    return history.push(path);
  };

  if (autenticacao) {
    return <Redirect to="/usuario" />;
  }

  return (
    <Container>
      <Conteudo>
        <h1>
          Kenzie<span>HUB</span>
        </h1>
        <span>Mostre sua paixão em forma de códigos</span>
        <div>
          <Button onClick={() => navegation("/cadastro")}>Cdastra-se</Button>
          <Button onClick={() => navegation("/login")}>Login</Button>
        </div>
      </Conteudo>
    </Container>
  );
};

export default Home;
