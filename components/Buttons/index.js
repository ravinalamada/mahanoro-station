import React from 'react'
import { Container } from './styles/buttons'

export default function Buttons({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}
