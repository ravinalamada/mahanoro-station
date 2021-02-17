import React from 'react';
import { Container, Base, Title, Fieldset, Input, Label, Wrapper } from './styles/form';

export default function Form({children, ...restProps}) {
  return (
    <Container {...restProps}>
        {children}
    </Container>
  )
}

Form.Base = function formBase({children, ...restProps}) {
  return (<Base {...restProps}>{children}</Base>)
}
Form.Wrapper = function formWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}
Form.Title = function formTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}
Form.Fieldset = function formFieldset({children, ...restProps}) {
  return (<Fieldset {...restProps}>{children}</Fieldset>)
}
Form.Input = function formInput({children, ...restProps}) {
  return (<Input {...restProps}>{children}</Input>)
}
Form.Label = function formLabel({children, ...restProps}) {
  return (<Label {...restProps}>{children}</Label>)
}

