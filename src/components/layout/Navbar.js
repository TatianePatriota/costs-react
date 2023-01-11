import { Container } from "./Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/costs_logo.png";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
