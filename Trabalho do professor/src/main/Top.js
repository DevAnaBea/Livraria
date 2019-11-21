import React from 'react'
import styled from 'styled-components'
import Link from './Menu';

export default function Top(){
  return(
    <Cabeca>
      <Logotipo>
         <Link to='/'> Livraria <br />Dom Casmurro </Link>
      </Logotipo>
       
       <Navigation>
         <Link to='/'>HOME</Link>
       </Navigation>

       <Navigation>
         <Link to='/sobre'>SOBRE</Link>
       </Navigation>

       <Navigation>
         <Link to='/dicas'>DICAS</Link>
       </Navigation>

       <Navigation>
         <Link to='/vendidos'>VENDIDOS</Link>
       </Navigation>

       <Navigation>
         <Link to='/recomendado'>RECOMENDADO</Link>
       </Navigation>

       <Navigation>
         <Link to='/contato'>CONTATO</Link>
       </Navigation>

    </Cabeca>
  )
}

const Navigation = styled(Link)`
    margin: 0px;
    padding: 10px;
   
`
const Logotipo = styled.h1`
    font-size: 1.5rem;
    display:flex;
`

const Cabeca = styled.header`
   display: flex;
   font-size: 1rem;
   align-items: center;
   justify-content: space-between;
   background:#007bff;
   flex-wrap:nowrap;
`