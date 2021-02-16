import { connect } from 'react-redux';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 73px;
  align-items: flex-start;

  @media(min-width: 700px) {
    div:nth-of-type(1) {
      flex-basis: 40%;
    }
  }

`;
export const Frame = styled.div``;

export const Wrapper = styled.div`

`;

export const  RedBgButtons = styled.button`
  border-color: transparent;
  margin-right: 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E53170;
`;

export const DefaultBgButtons = styled.button`
  border-color: transparent;
  background-color: transparent;
`;
export const  DepartureTime = styled.p``;
export const Seats = styled.p``;
export const Contact = styled.p``;
export const Logo = styled.span``;
export const Buttons = styled.button`
  border-color: transparent;
  background:linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(360deg, #FFAC33 117.76%, rgba(255, 255, 255, 0) 187.45%);
`;
export const Name = styled.p``;
export const Price = styled.p``;
export const Breaks = styled.p``;
export const EstimatedDuration = styled.p``;
