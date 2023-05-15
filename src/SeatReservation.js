import  { useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import './SeatReservation.css';

const Seat = ({
  seatNumber,
  isAvailable,
  isSelected,
  onClick
}) => {
  const seatClass = isAvailable ? isSelected ? 'seat selected' : 'seat' : 'seat unavailable';
  return /*#__PURE__*/_jsx("div", {
    className: seatClass,
    onClick: onClick,
    children: seatNumber
  });
};
const SeatLayout = ({
  seats,
  selectedSeats,
  onSeatClick
}) => {
  return /*#__PURE__*/_jsx("div", {
    className: "seat-layout",
    children: seats.map(seat => /*#__PURE__*/_jsx(Seat, {
      seatNumber: seat.seatNumber,
      isAvailable: seat.isAvailable,
      isSelected: selectedSeats.includes(seat.seatNumber),
      onClick: () => onSeatClick(seat.seatNumber)
    }, seat.seatNumber))
  });
};
const SeatReservation = () => {
  const [seats, setSeats] = useState(() => {
    const totalRows = Math.ceil(80 / 7);
    const lastRowCount = 80 % 7;
    const seatLayout = [];
    let seatNumber = 1;
    for (let row = 1; row <= totalRows; row++) {
      const rowSeats = row === totalRows ? lastRowCount : 7;
      for (let seat = 1; seat <= rowSeats; seat++) {
        seatLayout.push({
          seatNumber: `A${seatNumber}`,
          isAvailable: true
        });
        seatNumber++;
      }
    }
    return seatLayout;
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatClick = seatNumber => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };
  const handleSeatReservation = () => {
    if (selectedSeats.length === 0) {
      alert('No seats selected.');
    } else if (selectedSeats.length > 7) {
      alert('You can only reserve up to 7 seats at a time.');
    } else {
      const isConsecutiveSeats = selectedSeats.every((seat, index, array) => {
        if (index === 0) return true;
        return parseInt(seat.slice(1)) === parseInt(array[index - 1].slice(1)) + 1;
      });
      if (!isConsecutiveSeats) {
        alert('Selected seats should be consecutive in a row.');
      } else {
        const isAnySeatUnavailable = selectedSeats.some(seat => {
          const selectedSeat = seats.find(s => s.seatNumber === seat);
          return !selectedSeat.isAvailable;
        });
        if (isAnySeatUnavailable) {
          alert('Some of the selected seats are no longer available.');
        } else {
          setSelectedSeats([]);
          setSeats(prevSeats => prevSeats.map(seat => selectedSeats.includes(seat.seatNumber) ? {
            ...seat,
            isAvailable: false
          } : seat));
          alert(`Seats ${selectedSeats.join(', ')} reserved successfully!`);
        }
      }
    }
  };
  return /*#__PURE__*/_jsxs("div", {
    children: [/*#__PURE__*/_jsx("h1", {
      children: "Seat Reservation"
    }), /*#__PURE__*/_jsx(SeatLayout, {
      seats: seats,
      selectedSeats: selectedSeats,
      onSeatClick: handleSeatClick
    }), /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("h3", {
        children: "Selected Seats:"
      }), /*#__PURE__*/_jsx("ul", {
        children: selectedSeats.map(seat => /*#__PURE__*/_jsx("li", {
          children: seat
        }, seat))
      })]
    }), /*#__PURE__*/_jsx("button", {
      onClick: handleSeatReservation,
      children: "Reserve Seats"
    })]
  });
};
export default SeatReservation;