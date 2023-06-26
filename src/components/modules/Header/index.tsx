import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Container, Content, Input, Button, Form } from './styles';

export default function Header() {

    const [updated, setUpdated] = useState('');

    const handleClick = () => {
      console.log('>> updated', updated);

      if(updated == ''){
        alert('Ops, informe o nome de um personagem.');
      }else{
        location.href = "/?nameStartsWith="+updated;
      }
    };

    return (
      <Container>
        <Content>
          <div>
            <h1>
                <a href="/">MARVEL</a>
            </h1>
          </div>

          <Form>
            <Input 
              placeholder="Busque um personagem" 
              type="text" 
              onChange={(input) => {
                const updated = input?.target?.value;
                setUpdated(updated);
              }}
            />
            <Button onClick={handleClick}>
              Buscar
            </Button>
          </Form>
          
          <nav>
            <ul>
              <li>
                <a href="/">INÍCIO</a>
              </li>
            </ul>
          </nav>
        </Content>
      </Container>
  );
}