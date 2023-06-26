import { Container } from './styles';

export default function Spinner() {
  return (
    <Container>
      <img src="/assets/deadpool-logo.png" alt="" />

      <div>
        <span>Carregando...</span>
        <span id="first-dot">.</span>
        <span id="second-dot">.</span>
        <span id="third-dot">.</span>
      </div>
    </Container>
  );
}