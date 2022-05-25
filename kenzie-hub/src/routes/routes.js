import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "../pages/Cadastro/cadastro.jsx";
import Home from "../pages/Home/home.jsx";
import Login from "../pages/Login/login.jsx";
import PainelUser from "../pages/Usuario/usuario.jsx";

const Routes = () => {
  const [autenticacao, setAutenticacao] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("KenzieHub:token"));
    if (token) {
      return setAutenticacao(true);
    }
  }, [autenticacao]);

  return (
    <Switch>
      <Route exact path={"/cadastro"}>
        <Cadastro autenticacao={autenticacao} />
      </Route>
      <Route exact path={"/"}>
        <Home autenticacao={autenticacao} />
      </Route>
      <Route exact path={"/login"}>
        <Login autenticacao={autenticacao} setAutenticacao={setAutenticacao} />
      </Route>
      <Route exact path={"/usuario"}>
        <PainelUser
          autenticacao={autenticacao}
          setAutenticacao={setAutenticacao}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
