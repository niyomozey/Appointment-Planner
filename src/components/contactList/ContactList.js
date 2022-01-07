import ContactItem from '../contactItem/ContactItem';

function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.contactName}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </ul>
  );
}
export default ContactList;
