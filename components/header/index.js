import React from 'react'
import { Container, Wrapper ,Title, Text, Logo } from './styles/header'
export default function Header({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Header.Wrapper = function modalWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Header.Title = function modalTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

Header.Logo = function modalLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}

Header.Text = function modalText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}


