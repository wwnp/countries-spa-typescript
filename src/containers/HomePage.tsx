import Card from 'components/Card'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import { ICardProps } from './../types';
import { ALL_COUNTRIES } from './../config';
import { List } from 'components/List';
import { useNavigate } from 'react-router-dom';
import Search from 'components/Search';
import Filter from './../components/Filter';
import styled from 'styled-components';

interface HomePageProps {
  countries: any
  setCountries: (data: any) => void
}

const ControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`

const HomePage = ({ countries, setCountries }: HomePageProps) => {
  const [filteredCountries, setFilteredCountries] = useState<any>(countries)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(ALL_COUNTRIES)
      const data = await response.json()
      setCountries(data)
      setLoading(!loading)
    }
    if (countries.length === 0) {
      fetchCountries()
    }
    else if (countries.length !== 0) {
      setLoading(!loading)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleSearchAndFilter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries])

  // const handleSearch = () => {
  //   let data = [...countries]
  //   if (search) {
  //     data = data.filter((i, index) => {
  //       console.log()
  //       return i.name.toLowerCase().includes(search.toLowerCase())
  //     })
  //   }
  //   console.log(data)
  //   setFilteredCountries(data)
  // }

  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<any>('');

  // const handleSearchAndFilter = (search:any,region:any) => {
  const handleSearchAndFilter = () => {
    let data = [...countries]

    if (region) {
      data = data.filter((i) => {
        return i.region.toLowerCase().includes(region.value.toLowerCase())
      })
    }
    if (search) {
      data = data.filter((i, index) => {
        return i.name.toLowerCase().includes(search.toLowerCase())
      })
    }

    setFilteredCountries(data)
  }

  const out = () => {
    if (loading) {
      return <h1 style={{textAlign:'center'}}>Loading...</h1>
    } else {
      return (
        <List>
          {filteredCountries.map((i: any) => {
            return (
              <Card
                key={i.name}
                name={i.name}
                capital={i.capital}
                region={i.region}
                population={i.population}
                flags={i.flags}
                onClick={() => navigate(`/country/${i.name}`)}
              >
              </Card>
            )
          })
          }
        </List>
      )
    }
  }
  return (
    <React.Fragment>
      <ControlWrapper>
        <Search handleSearch={handleSearchAndFilter} setSearch={setSearch} search={search}></Search>
        <Filter handleFilter={handleSearchAndFilter} region={region} setRegion={setRegion}></Filter>
        {/* <Search handleSearch={handleSearchAndFilter}></Search> */}
        {/* <Filter handleFilter={handleSearchAndFilter}></Filter> */}
      </ControlWrapper>
      {out()}
    </React.Fragment>
  )
}

export default HomePage