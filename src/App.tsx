import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginContextProvider, { LoginContext } from './context';
import { Nav } from './Nav';
import { Login } from './Login';
import Posts from './Posts';
import { Post } from './Post';


function App() {  
  console.log('App rendered');
  
  return (
    <LoginContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>
              <Route path='/' element={<Posts />}/>
              <Route path='/:id' element={<Post />}/>
              <Route path='/login' element={<Login />}/>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </LoginContextProvider>
  );
}

export default App;
