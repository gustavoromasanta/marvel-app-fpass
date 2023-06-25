import { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/modules/Header';
import Hero from '../../components/modules/Hero';
import SectionTitle from '../../components/modules/SectionTitle';
import CharacterCard from '../../components/modules/CharacterCard';
import Spinner from '../../components/elements/Spinner';

import { Container } from '../../styles/CharactersList.styles';
import { Grid } from '../../styles/grid';
import Footer from '../../components/modules/Footer';
import Pagination from '../../components/modules/Pagination';

import styled from 'styled-components';

export const ResultNum = styled.p`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
`;

const LIMIT = 20;

interface Characters {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface RequestInfoPagination {
  total: number;
}

export default function CharactersList() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [requestInfo, setRequestInfo] = useState<RequestInfoPagination>();
  const [hasSpinner, setHasSpinner] = useState(false);
  const [offset, setOffset] = useState(0);
  const [nameStartsWith, setNameStartsWith] = useState();

  useEffect(() => {
    setHasSpinner(true);

    const nameStartsWith = '';
    if(window.location.search.indexOf('nameStartsWith') > -1){
      setNameStartsWith(window.location.search.split('nameStartsWith=')[1]);

      console.log('>> nameStartsWith: ', nameStartsWith);
    }
         
    if(nameStartsWith != ''){
      api.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameStartsWith}&limit=${LIMIT}&offset=${offset}&ts=1616179034&apikey=c22ba519d36ef5d64b7c341b94e6c7f9&hash=8a8b24fa59c32ba7bb0920b0c2721d86`).then((response) => {
        setRequestInfo(response.data.data);
        setCharacters(response.data.data.results);
        setHasSpinner(false);
      }).catch((error) => {
        setHasSpinner(true);
        console.error(error);
      })
    }else{
      api.get(`https://gateway.marvel.com/v1/public/characters?limit=${LIMIT}&offset=${offset}&ts=1616179034&apikey=c22ba519d36ef5d64b7c341b94e6c7f9&hash=8a8b24fa59c32ba7bb0920b0c2721d86`).then((response) => {
        setRequestInfo(response.data.data);
        setCharacters(response.data.data.results);
        setHasSpinner(false);
      }).catch((error) => {
        setHasSpinner(true);
        console.error(error);
      })
    }

  }, [offset, nameStartsWith]);

  return (
    <>
      <Header />
      <Hero />
      <Container>
        {hasSpinner ? (<Spinner />)
          :
          <>

            {nameStartsWith &&(
              <>
                <SectionTitle title={`Resultado por "${nameStartsWith}"`} />
              </>
            )}

            {!nameStartsWith &&(
              <>
                <SectionTitle title="CHARACTERS" />
              </>
            )}
            
            <Grid>
              {
                characters.length > 0 && characters.map(character => (
                  <CharacterCard id={character.id} name={character.name} image={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} />
                ))
              }
            </Grid>

            {
              characters.length < 1 && (
                <ResultNum>Nada encontrado</ResultNum>
              )
            }

            {requestInfo && (
              <>
                <ResultNum>Exibindo {requestInfo.count} de {requestInfo.total} resultado(s)</ResultNum>
                <Pagination
                  limit={LIMIT}
                  total={requestInfo.total}
                  offset={offset}
                  setOffset={setOffset}
                />
              </>
            )}
          </>
        }
      </Container>
      <Footer />
    </>
  )
}