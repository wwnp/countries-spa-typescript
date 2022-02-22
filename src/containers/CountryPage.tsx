import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import { ALL_COUNTRIES, searchByCountry } from 'config';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
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

  const [neighbors, setNeighbors] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchSingleCountry() {
      // const response = await fetch(ALL_COUNTRIES)
      const response = await fetch(searchByCountry + name)
      const data = await response.json()
      setCountry(data[0])
    }
    // if (!country) {
    fetchSingleCountry()
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  // const out = () => {
  //   if (country === null || Object.keys(country).length === 0) {
  //     return <h1>Loading</h1>
  //   }
  //   else {
  // const {
  //   name,
  //   flag,
  //   capital,
  //   region,
  //   subregion,
  //   latlng,
  //   population,
  //   area,
  //   borders,
  //   currencies,
  // } = country
  //     return (
  //       <React.Fragment>
  //         <div>
  //           <InfoTitle>{name}</InfoTitle>
  //           <InfoImage src={flag}></InfoImage>
  //           <CountryTable>
  //             <tbody>
  //               <tr>
  //                 <td>Capital</td>
  //                 <td>{capital}</td>
  //               </tr>
  //               <tr>
  //                 <td>Region</td>
  //                 <td>{region}</td>
  //               </tr>
  //               <tr>
  //                 <td>Subregion</td>
  //                 <td>{subregion}</td>
  //               </tr>
  //               <tr>
  //                 <td>Population</td>
  //                 <td>{population}</td>
  //               </tr>
  //               <tr>
  //                 <td>Location</td>
  //                 <td>{latlng[0]} : {latlng[1]}</td>
  //               </tr>
  //               <tr>
  //                 <td>Area</td>
  //                 <td>{area} km</td>
  //               </tr>
  //               <tr>
  //                 <td>Borders</td>
  //                 <td>
  //                   {
  //                     !borders.length
  //                       ? <span>No countries</span>
  //                       :
  //                       borders.map((i: string) => {
  //                         return (
  //                           <Tag
  //                             key={i}
  //                             onClick={() => console.log(123)}
  //                           >
  //                             {i}&nbsp;&nbsp;
  //                           </Tag>
  //                         )
  //                       })
  //                   }
  //                 </td>
  //               </tr>
  //             </tbody>
  //           </CountryTable>
  //         </div>
  //         <div>2</div>
  //       </React.Fragment>
  //     )
  //   }
  // }
  return (
    <React.Fragment>
      <Button onClick={() => navigate(-1) }><IoArrowBack />Back</Button>
      <Wrapper>

        {/* {out()} */}
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