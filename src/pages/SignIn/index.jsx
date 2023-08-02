import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Logo, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from '../../assets/logo.svg';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loading, setLoading } = useAuth();

  function handleSignIn() {
    signIn({email, password});
  }

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
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Input 
          type="password" 
          label="password" 
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          onChange={e => setPassword(e.target.value)}
          minLength="6"
          required
        />

        <Button 
          title={loading ? "Entrando" : "Entrar"}
          onClick={handleSignIn}
          disabled={loading}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}