import React from 'react'
import {Container,
  Price,
  Name,
  DepartureTime,
  Contact,
  Breaks,
  EstimatedDuration,
  Seats,
  RedBgButtons,
  DefaultBgButtons,
  Logo,
  Wrapper,
  Buttons,
  Frame} from './styles/destinationsDetails'
export default function DestinationsDetails({children, ...restProps}) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

DestinationsDetails.Frame = function DestinationsDetailsFrame({children, ...restProps}) {
  return (<Frame {...restProps}>{children}</Frame>)
}
DestinationsDetails.Wrapper = function DestinationsDetailsWrapper({children, ...restProps}) {
  return (<Wrapper {...restProps}>{children}</Wrapper>)
}
DestinationsDetails.Buttons = function DestinationsDetailsButtons({children, ...restProps}) {
  return (<Buttons {...restProps}>{children}</Buttons>)
}
DestinationsDetails.DepartureTime = function DestinationsDetailsDepartureTime({children, ...restProps}) {
  return (<DepartureTime {...restProps}>{children}</DepartureTime>)
}
DestinationsDetails.Price = function DestinationsDetailsPrice({children, ...restProps}) {
  return (<Price {...restProps}>{children}</Price>)
}

DestinationsDetails.RedBgButtons = function DestinationsDetailsRedBgButtons({children, ...restProps}) {
  return (<RedBgButtons {...restProps}>{children}</RedBgButtons>)
}

DestinationsDetails.DefaultBgButtons = function DestinationsDetailsDefaultBgButtons({children, ...restProps}) {
  return (<DefaultBgButtons {...restProps}>{children}</DefaultBgButtons>)
}
DestinationsDetails.Name = function DestinationsDetailsName({children, ...restProps}) {
  return (<Name {...restProps}>{children}</Name>)
}
DestinationsDetails.Seats = function DestinationsDetailsSeats({children, ...restProps}) {
  return (<Seats {...restProps}>{children}</Seats>)
}
DestinationsDetails.Contact = function DestinationsDetailsContact({children, ...restProps}) {
  return (<Contact {...restProps}>{children}</Contact>)
}
DestinationsDetails.Logo = function DestinationsDetailsLogo({children, ...restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}
DestinationsDetails.Breaks = function DestinationsDetailsBreaks({children, ...restProps}) {
  return (<Breaks {...restProps}>{children}</Breaks>)
}
DestinationsDetails.EstimatedDuration = function DestinationsDetailsEstimatedDuration({children, ...restProps}) {
  return (<EstimatedDuration {...restProps}>{children}</EstimatedDuration>)
}


