import { Container } from "./Container";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/costs_logo.png";

export function Navbar() {
  return (
    <div>
      <Container>
        <Link to="/">{/* <img src={logo} alt="Costs" /> */}</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projetos</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
