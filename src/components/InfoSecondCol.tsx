import React from 'react'
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
const InfoTitle = styled.h1`
  /* margin: 0; */
  font-weight: var(--fw-normal);
  font-size: 3rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--colors-ui-base);
`;
const WrapperSecondCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
`
const InfoSecondCol = (props: any) => {
  const {
    name
  } = props

  const [descr, setDescr] = useState(null)

  useEffect(() => {
    async function fethcDescr() {
      const response = await fetch(`http://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=Russia&format=json&origin=*`)
      const data = await response.json()
      console.log(data)
    }
    fethcDescr()
  }, [descr])

  return (
    <WrapperSecondCol>
      <InfoTitle>{name}</InfoTitle>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam impedit ducimus doloribus neque ut? Quae consequuntur quia ab eveniet recusandae ratione obcaecati et eius delectus ipsum, quidem fugit saepe velit?</div>
    </WrapperSecondCol>
  )
}

export default InfoSecondCol
