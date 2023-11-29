import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = ({auth}) => {
  return (
    <div>
      <Navbar auth={auth} />
      <main><Outlet/></main>
    </div>
  )
}

export default Layout