import React from 'react'
import { Container, Wrapper, Frame, Logo ,Title, Text, CloseButton } from './styles/modal'

export default function ShowModal({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

ShowModal.Wrapper = function modalWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}

ShowModal.Frame = function modalFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}

ShowModal.Logo = function modalLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}

ShowModal.Title = function modalTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

ShowModal.CloseButton = function modalCloseButton({children, ...restProps}) {
  return (<CloseButton {...restProps}>{children}</CloseButton>)
}

ShowModal.Text = function modalText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}


