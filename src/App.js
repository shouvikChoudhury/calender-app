import React, { useState } from 'react';
import Calendar from 'react-calendar'
import './App.css';
import 'react-calendar/dist/Calendar.css';
import EventNew from './Components/EventNew';

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="ml-5">
      <h3 className="mb-4">myCalender</h3>
      <Calendar onChange={onChange} value={value} />
      <EventNew date={value} />
    </div>
  );
}

export default App;
