import { Container, Content } from './styles';

import logoFooter from '../../assets/logo_footer.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoFooter} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}