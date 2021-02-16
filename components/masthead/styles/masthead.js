import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  align-items: center;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 40px;
  line-height: 36px;
  color: #000000;
  margin-top: 144px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    color: #E53170;
    font-weight: normal;
  }
`;

export const Logo = styled.span`
  svg {
    width: 72px;
    height: 72px
  }
`;
