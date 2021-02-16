import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  flex-basis: 50%;
  background: #0F0E17;

  a {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 20px;
`;

export const Logo = styled.button`
  background-color: transparent;
  border-color: transparent;
  padding-left: 20px;
`;
