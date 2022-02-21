import Card from 'components/Card'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import { ICardProps } from './../types';
import { ALL_COUNTRIES } from './../config';
import { List } from 'components/List';
import { useNavigate } from 'react-router-dom';
import Search from 'components/Search';
interface HomePageProps {
  countries: any
  setCountries: (data: any) => void
}
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
    handleSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries])

  const [search, setSearch] = useState<string>('')
  const handleSearch = () => {
    let data = [...countries]
    if (search) {
      data = data.filter((i, index) => {
        console.log()
        return i.name.toLowerCase().includes(search.toLowerCase())
      })
    }
    console.log(data)
    setFilteredCountries(data)
  }
  
  const out = () => {
    if (loading) {
      return <h1>Loading</h1>
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
    <main>
      <Search handleSearch={handleSearch} setSearch={setSearch} search={search}></Search>
      {out()}



      {/* {
        loading
          ? <h1>Loading</h1>
          : (
            <>
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
            </>
          )
      } */}
    </main>
  )
}

export default HomePage