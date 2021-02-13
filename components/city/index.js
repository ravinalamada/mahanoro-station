import React from 'react'
import {Container, Price, Name,DepartureTime, Contact, Breaks, EstimatedDuration, Seats, Buttons, Logo, Frame} from './styles/City'
export default function City({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

City.Frame = function CityFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}
City.DepartureTime = function CityDepartureTime({children, ...restProps}) {
  return (<DepartureTime {...restProps}>{children}</DepartureTime>)
}
City.Price = function CityPrice({children, ...restProps}) {
  return (<Price {...restProps}>{children}</Price>)
}

City.Buttons = function CityButtons({children, ...restProps}) {
  return (<Buttons {...restProps}>{children}</Buttons>)
}
City.Name = function CityName({children, ...restProps}) {
  return (<Name {...restProps}>{children}</Name>)
}
City.Seats = function CitySeats({children, ...restProps}) {
  return (<Seats {...restProps}>{children}</Seats>)
}
City.Contact = function CityContact({children, ...restProps}) {
  return (<Contact {...restProps}>{children}</Contact>)
}
City.Logo = function CityLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}
City.Breaks = function CityBreaks({children, ...restProps}) {
  return (<Breaks {...restProps}>{children}</Breaks>)
}
City.EstimatedDuration = function CityEstimatedDuration({children, ...restProps}) {
  return (<EstimatedDuration {...restProps}>{children}</EstimatedDuration>)
}


