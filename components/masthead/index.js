import React from 'react'
import { Container, Wrapper ,Title, Text, Logo } from './styles/masthead'
export default function Masthead({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Masthead.Wrapper = function modalWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Masthead.Title = function modalTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

Masthead.Logo = function modalLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}

