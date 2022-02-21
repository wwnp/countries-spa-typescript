import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`

const Search = ({ handleSearch, setSearch, search }: any) => {
  useEffect(() => {
    handleSearch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <div>
      <input type="search" placeholder='search' value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  )
}

export default Search