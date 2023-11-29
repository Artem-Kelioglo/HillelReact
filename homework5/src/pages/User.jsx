import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
  const {id}=useParams()
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const usersList = await res.json();
        setUser( usersList )
      } catch (error) {
        console.error(error)
      }
      
    }
    getUser()
  }, [])
  
  return (
    <div>
      <h1> &#129496; : {user.name}</h1>
      <p>  &#128231; : {user.email}</p>
      <p> &#9742; : {user.phone}</p>
      <p> &#127968; {user.address && user.address.city}</p>
    </div>
  )
}

export default User