import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form } from "./styles";

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/"><FiChevronLeft size={30}/></Link>
      </header>

      <Form>
        <Input 
          placeholder="Nome"
          type="text"
        />

        <Input 
          placeholder="E-mail"
          type="text"
        />

        <Input 
          placeholder="Senha atual"
          type="password"
        />

        <Input 
          placeholder="Nova senha"
          type="password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )  
}