function handleChairOnClick(e) {
        const imageValue =  e.target.dataset.value;
        const findSeat = carSeats?.seats.find(seat => {
            return seat.id === Number(imageValue)
        })
        if (findSeat) {
            console.log(user);
            findSeat.isAvailable= user.isSeatAvailabe
            findSeat.passengerFirstName= user.firstName
            findSeat.passengerLastName= user.lastName
            findSeat.passengerPhoneNumber= user.phoneNumber
            dispatch(userAction(findSeat))
        }
        dispatch(handleBookSeatAction(findSeat))
    }
