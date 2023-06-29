import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Book } from './pages/Book'
import { Movies } from './pages/Movies';
import { BookList } from './pages/BookList';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';
import AuthButton from './AuthButton';

import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
   
  <>
  <nav>
    <ul className='header-ul'>
      <AuthButton/>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/books'>Books</Link></li>
      <li><Link to='/movies'>Movies</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
   
  </nav>
  <div className='routes-content'>

    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/books" element={<BookList />}/>
      <Route  path="/books/:id" element={<Book />}/>

      <Route element={<PrivateRoute/>}>
        <Route  path="/movies" element={<Movies/>}/>
      </Route>

      <Route  path="/contact" element={<Contact />}/>
      <Route  path="/signup" element={<SignIn />}/>
      

    </Routes>
  </div>
  </>
  )
}

export default App;
