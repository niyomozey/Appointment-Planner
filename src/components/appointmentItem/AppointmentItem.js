function AppointmentItem(props) {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <p>{props.title}</p>
        <p>{props.date}</p>
        <p>{props.time}</p>
      </div>
    </li>
  );
}
export default AppointmentItem;
