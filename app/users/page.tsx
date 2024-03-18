'use client'
import React, { useEffect, useState } from 'react';

// User interface definition
interface User {
  id: number;
  name: string;
}

// UsersPage component
const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  // useEffect hook for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching users...'); // Log before fetch for clarity

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
        console.log('Users fetched successfully!'); // Log after success
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <>
      <div>Users</div>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {!users && <p>Loading users...</p>} {/* Display loading indicator */}
      </ul>
    </>
  );
};

export default UsersPage;