import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, email, phone);
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  useEffect(() => {
    const nameIsduplicate = () => {
      const searchForDuplicateName = contacts.find(
        (contact) => contact.contactName === name
      );

      const searchForDuplicateEmail = contacts.find(
        (contact) => contact.email === email
      );

      if (searchForDuplicateName !== undefined) {
        alert(`contact already exist`);
        setName('');
        return false;
      } else {
        return true;
      }
    };

    if (nameIsduplicate()) {
      setDuplicate(true);
    }
    setDuplicate(false);
  }, [name, contacts, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          email={email}
          phone={phone}
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
      <section>
        <ul>
          <ContactList contacts={contacts} />
        </ul>
      </section>
    </div>
  );
};
