import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/user';


const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    dispatch(addUser(newUser));
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
