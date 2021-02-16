import React from 'react';
import {connect} from 'react-redux';
import {displayModal} from '../actions';
import { ShowModal, Buttons } from '../components';
import {Link} from 'react-router-dom';
// import { Buttons } from '../components/trips/styles/trips';

 function ModalContainer({displayModal, Modal}) {
  return (
    <ShowModal onClick={() => {
      if(displayModal) {
        displayModal(false);
      }
    }}>
      <ShowModal.Wrapper>
        <ShowModal.CloseButton onClick={() => {
          if(displayModal) {
            displayModal(false)
          }
        }}>X</ShowModal.CloseButton>
          <ShowModal.Frame>
            <ShowModal.Title>Booking confirmed</ShowModal.Title>
            <ShowModal.Logo>
              <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.9345 6.45604C21.789 6.22813 24.4988 5.10538 26.678 3.24768C29.1394 1.15133 32.2668 0 35.4999 0C38.733 0 41.8605 1.15133 44.3218 3.24768C46.501 5.10538 49.2109 6.22813 52.0654 6.45604C55.289 6.71367 58.3154 8.11109 60.6021 10.3978C62.8888 12.6845 64.2862 15.7109 64.5438 18.9345C64.7701 21.7878 65.8928 24.4992 67.7522 26.678C69.8485 29.1394 70.9998 32.2668 70.9998 35.4999C70.9998 38.733 69.8485 41.8605 67.7522 44.3218C65.8945 46.501 64.7717 49.2109 64.5438 52.0654C64.2862 55.289 62.8888 58.3154 60.6021 60.6021C58.3154 62.8888 55.289 64.2862 52.0654 64.5438C49.2109 64.7717 46.501 65.8945 44.3218 67.7522C41.8605 69.8485 38.733 70.9998 35.4999 70.9998C32.2668 70.9998 29.1394 69.8485 26.678 67.7522C24.4988 65.8945 21.789 64.7717 18.9345 64.5438C15.7109 64.2862 12.6845 62.8888 10.3978 60.6021C8.11109 58.3154 6.71367 55.289 6.45604 52.0654C6.22813 49.2109 5.10538 46.501 3.24768 44.3218C1.15133 41.8605 0 38.733 0 35.4999C0 32.2668 1.15133 29.1394 3.24768 26.678C5.10538 24.4988 6.22813 21.789 6.45604 18.9345C6.71367 15.7109 8.11109 12.6845 10.3978 10.3978C12.6845 8.11109 15.7109 6.71367 18.9345 6.45604ZM51.95 29.7621C52.7583 28.9252 53.2056 27.8043 53.1955 26.6408C53.1854 25.4772 52.7187 24.3642 51.8959 23.5415C51.0732 22.7187 49.9602 22.252 48.7967 22.2419C47.6331 22.2318 46.5122 22.6791 45.6753 23.4874L31.0624 38.1003L25.3246 32.3626C24.4876 31.5542 23.3667 31.1069 22.2032 31.1171C21.0397 31.1272 19.9267 31.5939 19.1039 32.4166C18.2812 33.2394 17.8145 34.3524 17.8043 35.5159C17.7942 36.6794 18.2415 37.8003 19.0499 38.6373L27.925 47.5124C28.7572 48.3443 29.8857 48.8117 31.0624 48.8117C32.239 48.8117 33.3675 48.3443 34.1997 47.5124L51.95 29.7621Z" fill="#FF8906"/>
              </svg>
            </ShowModal.Logo>
          </ShowModal.Frame>
        <ShowModal.Text>
          Thank you for trusting our services. Your booking has been added to your account. You can review it there.
        </ShowModal.Text>
        <Link to='/userAccount'>
          <Buttons>Check your account</Buttons>
        </Link>
      </ShowModal.Wrapper>
    </ShowModal>
  )
}

function mapStateToProps(state){
  return {
    Modal: state.Modal,
  }
}

const mapToDispatch = {
 displayModal,
}


export default connect(mapStateToProps, (mapToDispatch))(ModalContainer)
