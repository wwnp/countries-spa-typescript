import { filterByCode } from 'config';
import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const InfoImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
  /* border-bottom: 1px solid var(--colors-text); */
  /* object-fit: contain; */
`;
const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const CountryTable = styled.table`
  border: solid 1px #DDEEEE;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
  table-layout: fixed;
  width: 100%;
  /* max-width:100%; */
  tbody tr td {
    border: solid 1px #DDEEEE;
    color: var(--colors-text);
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
    word-wrap: break-word;
    /* max-width: 100%; */
    /* white-space: nowrap; */
  }
`;
const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

const InfoFirstCol = (props: any) => {
  const {
    flag,
    capital,
    region,
    subregion,
    latlng,
    population,
    area,
    borders = [],
  } = props

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    if (borders.length) {
      fetchBorderCountries()
    }

    async function fetchBorderCountries() {
      const response = await fetch(filterByCode + borders.join(','))
      const data = await response.json()
      const modData = data.map((i: any) => {
        return i.name
      })
      setNeighbors(modData)

    }
  }, [borders])

  return (
    <div>
      <InfoImage src={flag}></InfoImage>
      <CountryTable>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Region</td>
            <td>{region}</td>
          </tr>
          <tr>
            <td>Subregion</td>
            <td>{subregion}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{population}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{latlng[0]} : {latlng[1]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {
                !borders.length
                  ? <span>No countries</span>
                  :
                  neighbors.map((c: string) => {
                    return (
                      <Tag
                        key={c}
                        onClick={() => navigate(`/country/${c}`)}
                      >
                        {c}
                      </Tag>
                    )
                  })
              }
            </td>
          </tr>
        </tbody>
      </CountryTable>
    </div>
  )
}

export default InfoFirstCol