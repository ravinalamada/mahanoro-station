import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 82px;
  align-items: flex-start;

  @media(min-width: 700px) {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List= styled.ul`
  margin: 0;
  padding: 0;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0F0E17;

`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 17px;
  line-height: 19px;
  color: #000000;
`;

export const Items = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  column-gap: 25px;
`;
export const Logo = styled.span`
  flex-basis: calc(calc(100% / 4) - 20px);

  svg {
    width: 72px;
    height: 72px;
  }
`;

export const Buttons = styled.button`
  background: #FF8906;
  width: max-content;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;
  padding: 10px;
`;
