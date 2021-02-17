import React from 'react';
import {connect} from 'react-redux';
import { Masthead, UserAccount} from '../components';
import FormContainer from '../containers/form';

 function userAccountContainer({cartItems}) {

  const mappedCartItems = cartItems.length !== 0 && cartItems.map(cart => (<span>{cart.driverName}</span>))
  return (
    <>
      <Masthead>
        <Masthead.Wrapper>
          <Masthead.Title>My account:
            {mappedCartItems}
          </Masthead.Title>
          <Masthead.Logo>
            <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.36 0H128.64C130.062 0 131.425 0.564713 132.43 1.56991C133.435 2.5751 134 3.93844 134 5.36V128.64C134 130.062 133.435 131.425 132.43 132.43C131.425 133.435 130.062 134 128.64 134H5.36C3.93844 134 2.5751 133.435 1.56991 132.43C0.564713 131.425 0 130.062 0 128.64V5.36C0 3.93844 0.564713 2.5751 1.56991 1.56991C2.5751 0.564713 3.93844 0 5.36 0V0Z" fill="#EBEDEE"/>
              <path d="M13.3999 26.8H120.6V120.6H13.3999V26.8Z" fill="white"/>
              <path d="M17.4199 9.38C18.4861 9.38 19.5086 9.80354 20.2625 10.5574C21.0164 11.3113 21.4399 12.3338 21.4399 13.4C21.4399 14.4662 21.0164 15.4887 20.2625 16.2426C19.5086 16.9965 18.4861 17.42 17.4199 17.42C16.3537 17.42 15.3312 16.9965 14.5773 16.2426C13.8234 15.4887 13.3999 14.4662 13.3999 13.4C13.3999 12.3338 13.8234 11.3113 14.5773 10.5574C15.3312 9.80354 16.3537 9.38 17.4199 9.38Z" fill="#E74C3C"/>
              <path d="M30.8198 9.38C31.886 9.38 32.9085 9.80354 33.6624 10.5574C34.4163 11.3113 34.8398 12.3338 34.8398 13.4C34.8398 14.4662 34.4163 15.4887 33.6624 16.2426C32.9085 16.9965 31.886 17.42 30.8198 17.42C29.7536 17.42 28.7311 16.9965 27.9772 16.2426C27.2233 15.4887 26.7998 14.4662 26.7998 13.4C26.7998 12.3338 27.2233 11.3113 27.9772 10.5574C28.7311 9.80354 29.7536 9.38 30.8198 9.38Z" fill="#F39C12"/>
              <path d="M44.2202 9.38C45.2864 9.38 46.3089 9.80354 47.0628 10.5574C47.8167 11.3113 48.2402 12.3338 48.2402 13.4C48.2402 14.4662 47.8167 15.4887 47.0628 16.2426C46.3089 16.9965 45.2864 17.42 44.2202 17.42C43.154 17.42 42.1315 16.9965 41.3776 16.2426C40.6237 15.4887 40.2002 14.4662 40.2002 13.4C40.2002 12.3338 40.6237 11.3113 41.3776 10.5574C42.1315 9.80354 43.154 9.38 44.2202 9.38Z" fill="#17A085"/>
              <path d="M60.2998 9.38H120.6V17.42H60.2998V9.38Z" fill="white"/>
              <path d="M26.7998 60.3V67H60.2998V60.3H26.7998ZM26.7998 80.4H60.2998V73.7H26.7998V80.4ZM26.7998 93.8H60.2998V87.1H26.7998V93.8ZM26.7998 107.2H60.2998V100.5H26.7998V107.2Z" fill="#BDC3C7"/>
              <path d="M26.7998 40.2H107.2V53.6H26.7998V40.2Z" fill="#FF8906"/>
              <path d="M67 60.3V80.4H107.2V60.3H67ZM67 107.2H107.2V87.1H67V107.2Z" fill="#BDC3C7"/>
              </svg>
          </Masthead.Logo>
        </Masthead.Wrapper>
      </Masthead>
      <UserAccount>
        <UserAccount.Wrapper>
          <FormContainer />
        </UserAccount.Wrapper>
        <UserAccount.Wrapper>
          <UserAccount.List>
            <UserAccount.Title>My bookings:</UserAccount.Title>
            {
              cartItems.length !== 0 && cartItems.map((cart, i) => {

                const date = new Date(cart.departureTime * 1000);
                // Hours part from the timestamp
                var hours = date.getHours();
                // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();
                // Get Full Date
                var fullDate = new Date(cart.departureTime).toLocaleDateString("en-US");
              return (
                <UserAccount.Items key={cart.id + i}>
                  <UserAccount.Logo>
                    <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                      <path d="M117.13 87.29C117.13 94.64 115.07 100.59 112.55 100.59C110.02 100.59 107.97 94.64 107.97 87.29C107.97 79.94 110.02 73.98 112.55 73.98C115.07 73.98 117.13 79.95 117.13 87.29Z" fill="#2F2F2F"/>
                      <path d="M110.56 99.28C110.56 99.28 111.78 101.23 113.1 101.89C116.09 103.38 120.25 102.83 122.75 99.43L121.41 91.33L112.95 92.94L110.56 99.28Z" fill="#2F2F2F"/>
                      <path d="M23.71 104.14C23.71 111.99 20.94 118.36 17.54 118.36C14.13 118.36 11.36 111.99 11.36 104.14C11.36 96.28 14.13 89.91 17.54 89.91C20.94 89.92 23.71 96.28 23.71 104.14Z" fill="#2F2F2F"/>
                      <path d="M14.85 116.97C14.85 116.97 16.49 119.06 18.29 119.76C22.32 121.35 27.92 120.76 31.29 117.14L29.48 108.48L18.08 110.2L14.85 116.97Z" fill="#2F2F2F"/>
                      <path d="M34.95 104.14C34.95 111.99 32.18 118.36 28.78 118.36C25.37 118.36 22.6 111.99 22.6 104.14C22.6 96.28 25.37 89.91 28.78 89.91C32.18 89.92 34.95 96.28 34.95 104.14Z" fill="#2F2F2F"/>
                      <path d="M90.78 104.14C90.78 111.99 88.01 118.36 84.61 118.36C81.2 118.36 78.43 111.99 78.43 104.14C78.43 96.28 81.2 89.91 84.61 89.91C88.01 89.92 90.78 96.28 90.78 104.14Z" fill="#2F2F2F"/>
                      <path d="M81.92 116.97C81.92 116.97 83.56 119.06 85.36 119.76C89.39 121.35 94.99 120.76 98.37 117.14L96.56 108.48L85.16 110.2L81.92 116.97Z" fill="#2F2F2F"/>
                      <path d="M114 12.21H17.31C7.28 12.21 0.160004 18.34 0.160004 27.36V91.7C0.160004 101.72 8.29 109.85 18.31 109.85H73.98C88.6 109.85 93.38 107.96 102.32 102.07C111.51 96.02 128 86.02 128 77.82V27.27C128 17.25 124.02 12.21 114 12.21Z" fill="#FCC21B"/>
                      <path d="M-0.380005 82.07H85.95V111.5H-0.380005V82.07Z" fill="#ED6C30"/>
                      <path d="M85.95 117.59L131.32 87.94V54.85L85.95 82.07V117.59Z" fill="#ED6C30"/>
                      <path d="M80.11 67.23C80.11 70.59 77.38 73.33 74.01 73.33H15.41C12.05 73.33 9.31998 70.59 9.31998 67.23V28.49C9.31998 25.13 12.05 22.39 15.41 22.39H74C77.37 22.39 80.1 25.13 80.1 28.49V67.23H80.11Z" fill="#40C0E7"/>
                      <path d="M6.60999 20.04H83.61V37.92H6.60999V20.04Z" fill="#2F2F2F"/>
                      <path d="M20.24 25.96H69.97V34.06H20.24V25.96Z" fill="white"/>
                      <path d="M108.42 48.97C108.42 51.57 106.9 54.53 104.91 55.66L97.5 59.87C94.76 61.41 92.37 60.04 92.37 56.67V29.25C92.37 25.89 94.77 23.16 97.5 23.16H104.91C106.9 23.16 108.42 25.27 108.42 27.85V48.97ZM120.34 26.78C120.34 24.81 119.61 23.21 118.67 23.21H115.33C114.17 23.21 113.17 25.12 113.17 27.46V46.52C113.17 48.86 114.17 50.16 115.33 49.43L118.67 47.39C119.61 46.81 120.34 44.77 120.34 42.8V26.78Z" fill="#40C0E7"/>
                      <path d="M16.08 100.82C19.8742 100.82 22.95 97.7487 22.95 93.96C22.95 90.1713 19.8742 87.1 16.08 87.1C12.2858 87.1 9.20999 90.1713 9.20999 93.96C9.20999 97.7487 12.2858 100.82 16.08 100.82Z" fill="white"/>
                      <path d="M79.13 93.96C79.13 97.75 76.05 100.82 72.25 100.82C68.47 100.82 65.39 97.75 65.39 93.96C65.39 90.16 68.46 87.1 72.25 87.1C76.05 87.1 79.13 90.16 79.13 93.96Z" fill="white"/>
                      <path d="M102.02 104.14C102.02 111.99 99.25 118.36 95.85 118.36C92.44 118.36 89.67 111.99 89.67 104.14C89.67 96.28 92.44 89.91 95.85 89.91C99.25 89.92 102.02 96.28 102.02 104.14Z" fill="#2F2F2F"/>
                      <path d="M125.46 87.29C125.46 94.64 123.41 100.59 120.88 100.59C118.35 100.59 116.3 94.64 116.3 87.29C116.3 79.94 118.35 73.98 120.88 73.98C123.42 73.98 125.46 79.95 125.46 87.29Z" fill="#2F2F2F"/>
                      </g>
                      <defs>
                      <clipPath id="clip0">
                      <rect width="128" height="128" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>

                  </UserAccount.Logo>
                  <UserAccount.Wrapper>
                    <UserAccount.Text>{cart.destination}</UserAccount.Text>
                    <UserAccount.Text>{fullDate}, {hours}: {minutes}</UserAccount.Text>
                  </UserAccount.Wrapper>
                  <UserAccount.Wrapper>
                    <UserAccount.Text>
                      {cartItems.length !== 0 && <span>{cartItems.length} {cartItems.length > 1 ? <span>seats</span>:<span>seat</span>}</span>}
                    </UserAccount.Text>
                    <UserAccount.Text>{cart.price} Ar</UserAccount.Text>
                  </UserAccount.Wrapper>
                  <UserAccount.Buttons disabled={cartItems.length === 0 ? true : false}>Cancel</UserAccount.Buttons>
                </UserAccount.Items>
              )})
            }
          </UserAccount.List>
        </UserAccount.Wrapper>
      </UserAccount>
    </>
  )
}

export default connect((state) => ({cartItems: state.cartItems}))(userAccountContainer)
