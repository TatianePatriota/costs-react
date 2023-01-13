import { Input } from "../form/Input";
import { Select } from "../form/Select";
import styles from "./ProjectForm.module.css";

export function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select text="Selecione a categoria" name="category_id" />
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  );
}
