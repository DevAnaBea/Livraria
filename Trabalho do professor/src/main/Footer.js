import React from 'react'
import styled from 'styled-components'

export default function Rodape(){
  return(
    <Footer>

      <Section>
       <h1>Livros</h1>
      <ul>
        <li>Livros de Artes</li>
        <li>Livros de Ciências</li>
        <li>Livros Didáticos </li>
        <li>Livros Humanidades </li>
        <li>Livros de Literatura e Ficção</li>
        <li>Livros de Idiomas e Referência </li>
      </ul>
      </Section>

      <Section>

      <h1>DVD's e Blu-Rays</h1>
      <ul>
        <li>Livros de Artes</li>
        <li>Livros de Ciências</li>
        <li>Livros Didáticos </li>
        <li>Livros Humanidades </li>
        <li>Livros de Literatura e Ficção</li>
        <li>Livros de Idiomas e Referência </li>
      </ul>
      </Section>

      <Section>
      <h1>Pesquise</h1>
      <ul>
        <li>Livros de Artes</li>
        <li>Livros de Ciências</li>
        <li>Livros Didáticos </li>
        <li>Livros Humanidades </li>
        <li>Livros de Literatura e Ficção</li>
        <li>Livros de Idiomas e Referência </li>
      </ul>
      </Section>
      
    </Footer>
  )
}

const Footer = styled.footer`
  width:1000px;
   background: gray;
   display:flex;
  flex-wrap: wrap;
  justify-content:center;
`;
const Section = styled.section `
width: 250px;
display:flex;
flex-wrap: wrap;
justify-content:left;
`