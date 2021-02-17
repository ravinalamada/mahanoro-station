import React from 'react'
import { Container, List, Items, Title, Text, Wrapper, Logo, Buttons } from './styles/userAccount'

export default function UserAccount({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

UserAccount.List = function userAccountList({children, ...restProps}) {
  return (<List {...restProps}>{children}</List>)
}
UserAccount.Items = function userAccountItems({children, ...restProps}) {
  return (<Items {...restProps}>{children}</Items>)
}
UserAccount.Title = function userAccountTitle({children, ...restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}
UserAccount.Wrapper = function userAccountWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}
UserAccount.Text = function userAccountText({children, ...restProps}) {
  return (<Text {...restProps}>{children}</Text>)
}
UserAccount.Logo = function userAccountLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}
UserAccount.Buttons = function userAccountButtons({children, ...restProps}) {
  return (<Buttons {...restProps}>{children}</Buttons>)
}
