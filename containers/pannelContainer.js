import React from 'react';
import {connect} from 'react-redux';
import {displayModal} from '../actions';
import Modal from 'react-modal';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

 function PannelContainer({displayModal, Modal}) {
  return (
    <div>
      I am a modal
    </div>
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


export default connect(mapStateToProps, (mapToDispatch))(PannelContainer)
