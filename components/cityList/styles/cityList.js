import styled from 'styled-components';

export const Container = styled.ul `
  margin: 0;
  padding: 0;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 82px;

  @media(min-width: 600px) {
    max-width: max-content;
    margin-inline-start: auto;
    margin-inline-end: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 82px;
    column-gap: 82px;
  }
`;
