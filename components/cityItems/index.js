import React from 'react';
import { Item, Title, Logo} from './styles/cityItems';

export default function CityItems({children, ...restProps}) {
  return (
    <Item {...restProps}>
      {children}
    </Item>
  )
}

CityItems.Title = function CityItemsTitle({children,restProps}) {
  return (<Title {...restProps}>{children}</Title>)
}

CityItems.Logo = function CityItemsLogo({children,restProps}) {
  return (<Logo {...restProps}>{children}</Logo>)
}
