import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0F0E17;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 20px;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  color: #FFFFFE;
`;
export const Text = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #A7A9BE;
`;

export const Logo = styled.span`
  svg {
    width: 24px;
    height: 24px;
  }
`;
