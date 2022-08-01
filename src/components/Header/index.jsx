import logo from "../../assets/logo.svg";
import { Container } from "./style";

function Header({ search, setSearch }) {
  return (
    <Container>
      <img src={logo} alt="logo marca" />
      <label>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={() => setSearch(search)}>Pesquisar</button>
      </label>
    </Container>
  );
}

export default Header;
