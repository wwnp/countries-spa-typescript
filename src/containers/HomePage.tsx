import Card from 'components/Card'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { ICardProps } from './../types';
import { ALL_COUNTRIES } from './../config';
import { List } from 'components/List';
const HomePage = () => {
  const [countries, setCountries] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(ALL_COUNTRIES)
      const data = await response.json()
      setCountries(data)
      setLoading(!loading)
    }
    fetchCountries()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <div>
        {
          loading
            ? <h1>Loading</h1>
            : (
              <List>
                {countries.map((i: any) => { return (<Card key={i.name} capital={i.capital} region={i.region} population={i.population} flags={i.flags} > </Card>) })}
              </List>

            )
        }
      </div>
    </main>
  )
}

export default HomePage