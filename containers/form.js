import React from 'react';
import {connect} from 'react-redux';
import {Form, Buttons} from '../components';
import {setNumber, setLastName, setFirstName, uptadeSeat} from '../actions'

function formContainer({
  setNumber,
  setLastName,
  setFirstName,
  uptadeSeat,
  passengerFirstName,
  passengerLastName,
  passengerPhoneNumber,
}) {

function handleUdpatedSeats(e) {
  e.preventDefault();
  const seats = {
    id: Date.now(),
    passengerFirstName: passengerFirstName,
    passengerLastName: passengerLastName,
    passengerPhoneNumber: passengerPhoneNumber,
  };
  uptadeSeat(seats)  ;

}
  return (
    <Form onClick={handleUdpatedSeats}>
      <Form.Title>My personnal informations:</Form.Title>
      <Form.Base>
        <Form.Fieldset>
          <Form.Label>First name</Form.Label>
          <Form.Input type='text' placeholder={passengerFirstName} value={passengerFirstName} onChange={(e) => setFirstName(e.target.value)} required/>
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label>Last name</Form.Label>
          <Form.Input type='text' placeholder={passengerLastName} value={passengerLastName} onChange={(e) => setLastName(e.target.value)} required/>
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Label>Phone number</Form.Label>
          <Form.Input type='tel' placeholder={passengerPhoneNumber} value={passengerPhoneNumber} onChange={(e) => setNumber(e.target.value)} />
        </Form.Fieldset>
        <Form.Wrapper>
          <Buttons>Update</Buttons>
        </Form.Wrapper>
      </Form.Base>
    </Form>
  )
}

  const mapToDispatch = {
    setNumber,
    setLastName,
    setFirstName,
    uptadeSeat
  }

  function mapStateToProps(state){
    return {
      passengerFirstName: state.updatedSeat.passengerFirstName,
      passengerLastName: state.updatedSeat.passengerLastName,
      passengerPhoneNumber: state.updatedSeat.passengerPhoneNumber,
    }
  }

export default connect(mapStateToProps, mapToDispatch)(formContainer)

