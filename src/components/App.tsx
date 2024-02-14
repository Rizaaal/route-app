import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import '../App.css';
import { LoginContext } from '../context';
import { Nav } from './Nav';
import { Login } from './Login';
import Posts from './Posts';
import { Post } from './Post';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import { useContext, useState } from 'react';
import { ProtectedRouteLogin } from '../routes/ProtectedRouteLogin';


function App() {  
  console.log('App rendered');
  const { logged } = useContext(LoginContext);
  console.log('logged: ', logged);
  
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>

              <Route element={<ProtectedRoute logged={logged} />}>
                <Route path='/' element={<Posts />}/>
                <Route path='/post/:id' element={<Post />}/>
              </Route>

              <Route element={<ProtectedRouteLogin logged={logged} />}>
                <Route path='/login' element={<Login />}/>
              </Route>

              <Route path='*' element={
                <>
                  <h1>404</h1>
                  <NavLink to='/'>Ritorna alla home</NavLink>
                </>
              }></Route>
              
            </Routes>
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
