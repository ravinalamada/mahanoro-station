import React from 'react'
import {Container, Day, Date, Hours, Seats, Buttons, Logo, Frame} from './styles/trips'
export default function Trips({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

Trips.Day = function TripsDay({children, ...restProps}) {
  return (<Day {...restProps}>{children}</Day>)
}
Trips.Frame = function TripsFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}
Trips.Date = function TripsDate({children, ...restProps}) {
  return (<Date {...restProps}>{children}</Date>)
}

Trips.Buttons = function TripsButtons({children, ...restProps}) {
  return (<Buttons {...restProps}>{children}</Buttons>)
}
Trips.Seats = function TripsSeats({children, ...restProps}) {
  return (<Seats {...restProps}>{children}</Seats>)
}
Trips.Hours = function TripsHours({children, ...restProps}) {
  return (<Hours {...restProps}>{children}</Hours>)
}
Trips.Logo = function TripsLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}


