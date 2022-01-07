import AppointmentItem from '../appointmentItem/AppointmentItem';

function ContactList(props) {
  return (
    <ul>
      {props.appointments.map((appointment) => (
        <AppointmentItem
          key={appointment.id}
          id={appointment.id}
          name={appointment.contact}
          title={appointment.title}
          date={appointment.date}
          time={appointment.time}
        />
      ))}
    </ul>
  );
}
export default ContactList;
