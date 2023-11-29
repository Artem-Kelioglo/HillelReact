import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Todos from './pages/Todos';
import User from './pages/User';
import Users from './pages/Users';
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);
  
  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      
      <Routes>
        <Route path='/' element={<Layout auth={user } />}>
          <Route path='/' element={<Home />}></Route>
          <Route
            path='/todos'
            element={
              <ProtectedRoute user={user}>
                <Todos />
              </ProtectedRoute>}>
          </Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/users/:id' element={<User />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
