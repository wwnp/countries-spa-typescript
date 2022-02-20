
import { ICardProps } from './../types';
import styled from 'styled-components';
const CardImage = styled.img`
display: block;
width: 100%;
height: 150px;
object-fit: cover;
object-position: center;
box-shadow: var(--shadow);
`
const CardBody = styled.div`
padding: 1rem 1.5rem 2rem;
`
const CardTitle = styled.h3`
margin: 0;
font-size: var(--fs-md);
font-weight: var(--fw-bold);
`
const Card = ({ name, capital, region, flags }: any) => {
  return (
    <div>
      <CardImage src={flags.png} alt={name}></CardImage>
      <CardBody>
        <CardTitle></CardTitle>
      </CardBody>
    </div>
  )
}

export default Card