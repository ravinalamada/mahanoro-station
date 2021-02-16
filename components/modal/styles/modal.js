import styled from 'styled-components';

export const Container = styled.section`
  background: rgba(255, 255, 255, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
  align-items: baseline;
`;

export const Wrapper = styled.div`
  position: fixed;
  background: #FFFFFF;
  border: 5px solid #E53170;
  box-sizing: border-box;
  width: 70%;
  height: 70%;
  top: 10%;
  bottom: 10%;
  left: 20%;
  right: 10%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Title = styled.h2`
  font-weight: bold;
  font-size: 25px;
  line-height: 38px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #000000;

  @media(max-width: 600px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  width: 300px;

  @media(max-width: 600px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button `
  width: 100%;
  text-align: right;
  font-size: 28px;
  color: #3E4347;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
`;

export const Logo = styled.button`
 width: 24px;
 height: 24px;
 border-color: transparent;
 background-color: transparent;
   svg {
    width: 24px;
    height: 24px;
   }
`;

