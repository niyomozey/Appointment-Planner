function ContactItem(props) {
  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        <address>{props.email}</address>
        <p>{props.phone}</p>
      </div>
    </li>
  );
}
export default ContactItem;
