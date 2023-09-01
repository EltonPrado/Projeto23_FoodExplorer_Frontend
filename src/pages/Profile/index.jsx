import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Container, ButtonBack, Form, ButtonSave } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  };
  
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
        <ButtonBack type="button" onClick={handleBack}>
          <span><FiChevronLeft size={30}/>Voltar</span>
        </ButtonBack>
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

        <ButtonSave onClick={handleUpdate}>Salvar</ButtonSave>
      </Form>
    </Container>
  )  
}