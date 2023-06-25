import styled from 'styled-components';

export const Container = styled.header`
  background-color: #0A0F0D;
  color: #F9F9F9;
  height: 75px;
  border-bottom: 2px solid #EC1D24;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 992px;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  div { 
    h1 {
      font-style: italic;
      font-weight: 900;
      a {
        padding: 1rem 0;
      }
    }
  }

  nav {
    ul {
      li {
        font-weight: 700;
        transition: color 0.2s;
        a {
          padding: 0.7rem 0;
        }

        &:hover {
          color: #EC1D24;
        }
      }
    }
  }
`;

export const Input = styled.input`
  height: 37px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #EC1D24;

  &:focus{
    outline: none;
  }
`;

export const Button = styled.button`
  height: 37px;
  cursor: pointer;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #EC1D24;
  margin-left: 5px;
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  font-weight: 700;

  &:hover{
    background-color: #000;
    color: #EC1D24;
  }
`;

export const Form = styled.div`
  height: 37px;
  display: flex;
`;