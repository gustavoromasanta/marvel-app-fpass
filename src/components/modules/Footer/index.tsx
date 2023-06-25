import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <a href="https://www.linkedin.com/in/gustavoroma/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
        <p>Developed by Gustavo Roma</p> 
        <p>contato@gustavoroma.com</p>
        <p>Whatsapp (21) 98222-3622</p>
      </Content>
    </Container>
  );
}