'use client'
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>Users</div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {!users && <p>Loading users...</p>}
      </ul>
    </>
  );
};

export default UsersPage;