import React from 'react';
import Link from 'next/link';
import { Container, Content, Input, Button, Form } from './styles';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    }
  }

  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;

    console.log('>> searchQuery: ',searchQuery);
    if(searchQuery == ''){
      alert('Ops, informe o nome de um personagem.');
    }else{
      location.href = "/?nameStartsWith="+searchQuery;
    }

  }
  render() {
    return (
    <Container>
      <Content>
        <div>
          <h1>
              <a href="/">MARVEL BOOK</a>
          </h1>
        </div>

        <Form>
          <Input placeholder="Busque um personagem" type="text" value={this.state.searchQuery} onChange={this.handleInputChanged.bind(this)}/>
          <Button onClick={this.handleButtonClicked.bind(this)}>
            Buscar
          </Button>
        </Form>
        
        <nav>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
  }
}