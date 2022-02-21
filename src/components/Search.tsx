import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5'
const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
  width: 100%;
  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const MyIoClose = styled(IoClose).attrs({})`
  cursor: pointer;
  opacity: 0.9;
  :hover {
    opacity: 1;
  }
`;

const Search = ({ handleSearch, setSearch, search }: any) => {
// const Search = ({ handleSearch }: any) => {
  // const [search, setSearch] = useState<string>('')
  useEffect(() => {
    handleSearch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  return (
    <InputContainer>
      <Input value={search} onChange={e => setSearch(e.target.value)} />
      <MyIoClose onClick={e => setSearch('')} size={'100%'}></MyIoClose>
    </InputContainer>
  )
}

export default Search