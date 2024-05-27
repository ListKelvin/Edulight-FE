'use client';

import { UserForm } from './UserForm';

const AddUserForm = () => (
  <UserForm
    onValid={async (data) => {
      await fetch(`https://65e7562553d564627a8e91f1.mockapi.io/api/v1/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }}
  />
);

export { AddUserForm };
