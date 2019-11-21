import React from 'react'

import Banner from './Banner'
import Livros from './Livros'
import styled from 'styled-components'
import Footer from '../../main/Footer'



export default function Home(){
  return(
    <Section>
      <Banner />
      <Lancamento>Lançamentos</Lancamento>
      <Livros />
      <Footer />
    </Section>


  )
}

const Section = styled.section`

` 

const Lancamento = styled.h1`
display: flex;
flex-wrap:wrap;
font-size: 25px;
font-family:Arial;
color: #007bff;
text-align:left;
`