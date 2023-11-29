import {NavLink} from 'react-router-dom'

const Navbar = ({auth}) => {
  return (
    <nav>
      
      <NavLink to='/' style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'black' : 'grey',
          padding: isActive ? '10px' : '10px',
          fontSize:isActive? '18px': '16px'
        }
      }}>Home</NavLink>

      <NavLink to='/users' style={({ isActive }) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'black' : 'grey',
          padding: isActive ? '10px' : '10px',
          fontSize:isActive? '18px': '16px'
         
        }
      }}>Users</NavLink>

      <NavLink to='/about' style={({ isActive}) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'black' : 'grey',
          padding: isActive ? '10px' : '10px',
          fontSize:isActive? '18px': '16px'
        }
      }}>About</NavLink>

      {auth? <NavLink to='/todos' style={({ isActive}) => {
        return {
          fontWeight: isActive ? 'bold' : '',
          color: isActive ? 'black' : 'grey',
          padding: isActive ? '10px' : '10px',
          fontSize:isActive? '18px': '16px'
        }
      }}>Todos</NavLink>:''}
    </nav>
  )
}

export default Navbar