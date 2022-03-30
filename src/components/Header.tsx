import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline, IoLogoElectron } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  grid-area: header;
  box-shadow: 1px 2px 3px #ccc;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  text-decoration: none;
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  margin-left: 1rem;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;

`;

const NameMode = styled.span`
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  transition: text-shadow ease .05s;
  :hover {
    text-shadow: var(--text-shadow-hover)
  }
`
const GitHubLink = styled.a.attrs({
  href: 'https://github.com/wwnp/spa-typescript',
  rel: "noopener",
  target: "__blank"
})`
  margin-left: 1.75rem;
  margin-right: 1.75rem;
  transition: text-shadow ease .05s;
  color:var(--colors-text);
  :hover {
    text-shadow: var(--text-shadow-hover)
  }
`

const Header = () => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const modeSwitch = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <HeaderWrapper>
      <Title><IoLogoElectron size={24}></IoLogoElectron></Title>
      <RightWrapper>
        <ModeSwitcher onClick={modeSwitch}>
          {
            theme === 'light'
              ? (
                <IoMoonOutline size="14px" />
              )
              : (
                <IoMoon size="14px" />
              )
          }
          <NameMode>{theme} mode</NameMode>
          <GitHubLink>GitHub Repo</GitHubLink>
        </ModeSwitcher>
      </RightWrapper>

    </HeaderWrapper>
  )
}
export default Header