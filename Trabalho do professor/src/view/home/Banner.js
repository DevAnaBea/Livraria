import React from "react";
import styled from 'styled-components'

//import Livros from './Livros' 
import banner from './img/banner.png'

export default function Home(){
  return(
    <Figure>
      <Section>
        <Img src={banner} alt='Banner' width='890' height='500' />
      </Section>
    </Figure>
  )
}

const Figure = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  margin: 10px;
  padding: 10px;
  width: 890px;
  height: 500px;
`;

const Img = styled.img `
  border-width: 5px;
  border-style: solid;
  border-color: #007bff;
  justify-content:center;
  box-shadow: 5px 8px 0px 0px #111148; 

`


