import React, { useState } from 'react';
import CreateUser from '../components/Users/CreateUser';

const Users = () => {
  const [crud, setcrud] = useState('create');

  return (
    <div className="page__container">
      <CreateUser setcrud={setcrud} crud={crud} />
    </div>
  );
};

export default Users;
