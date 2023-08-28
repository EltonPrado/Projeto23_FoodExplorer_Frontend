import { Container } from './styles';

export function Button({title, image, loading = false, ...rest}) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      { image ? <img src={image} alt="ícone do botão"/> : ''}
      {loading ? "carregando..." : title}
    </Container>
  )
}