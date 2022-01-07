import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            required
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          email
          <input
            type="email"
            required
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="number">
          Phone
          <input
            type="text"
            required
            id="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
