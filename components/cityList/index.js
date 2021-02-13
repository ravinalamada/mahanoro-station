import React from 'react'
import { Container } from './styles/cityList'

export default function CityList({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}
