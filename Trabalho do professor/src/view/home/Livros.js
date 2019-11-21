import React from 'react'
import styled from 'styled-components'

import quincas from './img/quincas.jpg'
import guerra from './img/guerra.jpg'
import afilosofia from './img/afilosofia.jpg'
import agrande from './img/agrande.jpg'
import orgulho from './img/orgulho.jpg'
import vidassecas from './img/vidassecas.jpg'


export default function Livros() {
  const books = [
    {
      id: 1,
      caminhoIMG: quincas,
      title: "Quincas Borba",
      author: "Machado de Assis",
      price: "R$ 30,00"
    },
    {
      id: 2,
      caminhoIMG: guerra,
      title: "A Guerra do Fim do Mundo",
      author: "Mario Vargas Llosa",
      price: "R$ 40,00"
    },
    {
      id: 3,
      caminhoIMG: afilosofia,
      title: "A Filosofia Explica Bolsonaro",
      author: "Paulo Ghiraldelli Jr",
      price: "R$ 50,00"
    },
    {
      id: 4,
      caminhoIMG: agrande,
      title: "A Viagem de Théo",
      author: "Richard Dawkins",
      price: "R$ 30,00"
    },
    {
      id: 5,
      caminhoIMG: orgulho,
      title: "Orgulho e Preconceito",
      author: "Jane Austen",
      price: "R$ 40,00"
    },
    {
      id: 6,
      caminhoIMG: vidassecas,
      title: "Vidas Secas",
      author: "Graciliano Ramos",
      price: "R$ 50,00"
    }
  ];

  return (
    <List>
      <Ul>
        {books.map(titulo => (
          <Li key={titulo.id}>
            <Img src={titulo.caminhoIMG}/>
            <Titulo>{titulo.title}</Titulo>
            <Autor>{titulo.author}</Autor> 
            <Preco>{titulo.price}</Preco>{" "}
          </Li>
        ))}
      </Ul>
    </List>
  );
}

const List = styled.section`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`;

const Li = styled.li`
  display:flex;
  flex-direction:column;
  margin:10px;
  align-items:center;
  justify-content:center;
`;
const Ul = styled.ul`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;

`;



const Titulo = styled.h1`

 
`;

const Autor = styled.h4`
  
`;

const Preco = styled.p`
 
`;
const Img =styled.img`

width:300px;
height:500px;

`;