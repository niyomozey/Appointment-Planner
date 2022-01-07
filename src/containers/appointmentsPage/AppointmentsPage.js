import React, { useState, useRef } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import AppointmentList from '../../components/appointmentList/AppointmentList';

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info
    props.addAppointment(title, contact, date, time);

    // clear data
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
      <section>
        <AppointmentList appointments={props.appointments} />
      </section>
    </div>
  );
};
