import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from '../../store';
import { selectUserList } from '../../store/slices/user/selector';

const UserList: React.FC = () => {

  const users = useSelector(selectUserList);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
};

export default UserList;
