import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  grid-area: header;
  min-height: 50px;
  box-shadow: 1px 2px 3px #ccc;
`;
const Header = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderWrapper>
      Header
    </HeaderWrapper>
  )
}
export default Header