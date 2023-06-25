import Link from 'next/link';

import { Container, Content } from './styles';

export default function CharacterCard({ image, id, name }) {
  return (
    <Container>
      <Link href={{
        pathname: '/CharacterDetail/',
        query: {
          id,
        }
      }}>
          <Content>
            <div>
              <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
          </Content>
      </Link>
    </Container>
  );
}