import styled from 'styled-components';

export const Container = styled.div`

`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-block-end: 2rem;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0F0E17;
  padding-left: 20px;
`;

export const Base = styled.form`
  display: grid;
	grid-template-columns: 300px;
	gap: 10px;
`;
export const Fieldset = styled.fieldset`
  height: 100px;
  border: none;
  padding: 0 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Input = styled.input`
  border: none;
  width: 100%;
  font-weight: 500;
  background: #000000;
  font-size: 24px;
  line-height: 28px;
  color: #FF8906;
  padding-top: 17px;
  padding-bottom: 17px;
  padding-left: 20px;

`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #0F0E17;

`;

