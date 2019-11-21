import React from 'react'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
  
import Routes    from './Routes'
import Cabecalho from './Top'
import Footer from './Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Corpo>
         <Cabecalho />
         <Routes />  
      </Corpo>
    </BrowserRouter>
  );
}

const Corpo = styled.body`
   width: 1300px;
   height: 650px;
   margin: 0 auto;
   padding: 0 auto;
   background: #ccc;
   `