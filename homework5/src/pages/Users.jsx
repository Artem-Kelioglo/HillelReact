import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersList = await res.json();
        setUsers( usersList )
      } catch (error) {
        console.error(error)
      }
      
    }
    getUsers()
  }, [])
  
  return (
    <div>
      {
        users.length>0 && users.map(user =>(<div  key={user.id } >
          <span>{user.id}) </span> 
          <span>{ user.username} </span>
          <Link to={`${user.id}`}>details</Link>
        </div>))
      }
    </div>
  )
}

export default Users

