import { Container, Content } from './styles';

import logoFooter from '../../assets/logo_footer.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="brand">
          <img src={logoFooter} alt="Logo do food explorer" />
          <span>food explorer</span>
        </div>
        
        <p> &copy; 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}