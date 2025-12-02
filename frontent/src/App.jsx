import { useEffect, useState } from 'react';
import './App.css';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 5;
  
  const fetchUsers = async () =>{
    const response = await fetch("https://dummyjson.com/users?skip=0&limit=10");
    const data = await response.json();
    setUsers(data.users);
  };
  useEffect(()=>{
    fetchUsers();
  },[page]);

  //delete users only from ui
  const deleteUser = (id) =>{
    setUsers((prev) => prev.filter((user) => user.id !==id));
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='test-3xl font-bold mb-6'>User Listing Page </h1>

      <div className='space-y-4'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onDelete= {deleteUser}/>
        ))}
      </div>
      <div className='flex justify-between mt-6'>
        <button
        onClick={() =>setPage((p) =>Math.max(p-1,0))}
        className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'>
          Previous
        </button>
        
        <button
        onClick={() =>setPage((p) =>Math.max(p+1))}
        className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
