import { Link } from "react-router-dom";

import { Container, Logo, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from '../../assets/logo.svg';

export function SignIn() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logomarca polígono azul" />
        <strong>food explorer</strong>
      </Logo>

      <Form>
        <legend>Faça login</legend> 

        <Input 
          type="email" 
          label="email" 
          title="E-mail" 
          placeholder="Exemplo: exemplo@email.com"
        />

        <Input 
          type="password" 
          label="password" 
          title="Senha"
          placeholder="No mínimo 6 caracteres"
        />

        <Button title="Entrar" />

        <Link>Criar uma conta</Link>
      </Form>
    </Container>
  )
}