import React from 'react';
import {Header} from '../components';
import {Link} from 'react-router-dom';

export default function headerContainer() {
  return (
    <Header>
      <Header.Wrapper>
        <Link to="/">
          <Header.Title>Mahanoro station</Header.Title>
        </Link>
        <Header.Logo>
          <svg width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 30.2105C0 32.1095 0.853125 33.8142 2.1875 35.0011V41H8.75V36.6842H26.25V41H32.8125V35.0011C34.1469 33.8142 35 32.1095 35 30.2105V8.63158C35 1.07895 27.1688 0 17.5 0C7.83125 0 0 1.07895 0 8.63158V30.2105ZM7.65625 32.3684C5.84062 32.3684 4.375 30.9226 4.375 29.1316C4.375 27.3405 5.84062 25.8947 7.65625 25.8947C9.47188 25.8947 10.9375 27.3405 10.9375 29.1316C10.9375 30.9226 9.47188 32.3684 7.65625 32.3684ZM27.3438 32.3684C25.5281 32.3684 24.0625 30.9226 24.0625 29.1316C24.0625 27.3405 25.5281 25.8947 27.3438 25.8947C29.1594 25.8947 30.625 27.3405 30.625 29.1316C30.625 30.9226 29.1594 32.3684 27.3438 32.3684ZM30.625 19.4211H4.375V8.63158H30.625V19.4211Z" fill="#FF8906"/>
          </svg>
        </Header.Logo>
      </Header.Wrapper>
      <Header.Text><Link to='/userAccount'>My account</Link></Header.Text>
    </Header>
  )
}
