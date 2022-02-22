
import { ICardProps } from './../types';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow .1s linear;
  :hover {
    box-shadow: var(--shadow-hover);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  border-bottom: 1px solid #ccc;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h1`
  margin: 0;
  text-align:center;
  margin-bottom:10px;
`;

const CardTable = styled.table`
  width:100%;
  border: solid 1px #DDEEEE;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;
  tbody tr td {
    border: solid 1px #DDEEEE;
    color: var(--colors-text);
    padding: 10px;
    text-shadow: 1px 1px 1px #fff;
  }
`;
const Card = (props: ICardProps) => {
  const { name, capital, region, population, flags, onClick, } = props
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={flags.png} alt={name}></CardImage>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardTable>
          <tbody>
            <tr>
              <td>Population</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Region</td>
              <td>{region}</td>
            </tr>
            <tr>
              <td>Capital</td>
              <td>{capital}</td>
            </tr>
          </tbody>
        </CardTable>
      </CardBody>
    </Wrapper>
  )
}

export default Card