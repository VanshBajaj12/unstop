import React from 'react';
import './App.css';
import Navigation from './Navigation';
import SeatReservation from './SeatReservation';
import ReservationForm from './ReservationForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <img src="https://images.unsplash.com/uploads/1413387158190559d80f7/6108b580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Train" style={styles.image} />
      <SeatReservation />
      <ReservationForm />
    </div>
  );
}

const styles = {
  image: {
    width: '500px',
    height: '100%',
    maxHeight: '600px',
    maxWidth: '500px',
    margin: '20px auto',
    display: 'block',
  },
};

export default App;
