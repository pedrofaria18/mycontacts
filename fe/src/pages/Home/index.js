import { Link } from "react-router-dom";

import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import trash from "../../assets/images/trash.svg";

import {
  Card,
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ícone de flexa" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Faria</strong>
              <small>instagram</small>
            </div>

            <span>pedro@gmail.com</span>
            <span>(31) 9999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/1">
              <img src={edit} alt="Ícone de edição" />
            </Link>

            <button type="button">
              <img src={trash} alt="Ícone de exclusão" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
