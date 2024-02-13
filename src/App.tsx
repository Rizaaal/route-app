import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginContextProvider, { LoginContext } from './context';
import { Nav } from './Nav';
import { Login } from './Login';
import Posts from './Posts';
import { Post } from './Post';
import { ProtectedRoute } from './ProtectedRoute';
import { useContext, useState } from 'react';


function App() {  
  console.log('App rendered');
  const { logged } = useContext(LoginContext);
  console.log('Context on App: ', logged);
  
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>

              <Route element={<ProtectedRoute logged={logged} />}>
                <Route path='/' element={<Posts />}/>
                <Route path='/:id' element={<Post />}/>
              </Route>
              
              <Route path='/ciao' element={<Login />}/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
