import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name, 
      email, 
      old_password: passwordOld,
      password: passwordNew
    }

    await updateProfile({ user });
  }

  return(
    <Container>
      <header>
        <Link to="/"><FiChevronLeft size={30}/></Link>
      </header>

      <Form>
        <Input 
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )  
}