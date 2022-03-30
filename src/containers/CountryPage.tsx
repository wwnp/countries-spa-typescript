import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { searchByCountry } from 'config';
import { useParams, useNavigate } from 'react-router';
import InfoFirstCol from 'components/InfoFirstCol';
import InfoSecondCol from 'components/InfoSecondCol';
import { IoArrowBack } from 'react-icons/io5';
const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  
  gap: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 1224px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: min-content 1fr;
  }
`;

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--color-text);
  cursor: pointer;
`;

const CountryPage = () => {
  const { name } = useParams()
  const [country, setCountry] = useState<any>(null);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchSingleCountry() {
      const response = await fetch(searchByCountry + name)
      const data = await response.json()
      setCountry(data[0])
    }
    fetchSingleCountry()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <React.Fragment>
      <Button onClick={() => navigate(-1)}><IoArrowBack />Back</Button>
      <Wrapper>
        {
          country === null || Object.keys(country).length === 0
            ? <h1>Loading</h1>
            : (
              <React.Fragment>
                <InfoFirstCol
                  {...country}
                >
                </InfoFirstCol>
                <InfoSecondCol
                  {...country}
                >
                </InfoSecondCol>
              </React.Fragment>
            )
        }
      </Wrapper >
    </React.Fragment>
  )
}

export default CountryPage