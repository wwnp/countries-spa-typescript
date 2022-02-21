import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  @media (min-width: 521px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }
  @media (min-width: 897px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;
export const List = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};