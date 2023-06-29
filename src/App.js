import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Book } from './pages/Book'
import { Movies } from './pages/Movies';
import AuthButton from './AuthButton';

import { BookList } from './pages/BookList';
import { Contact } from './pages/Contact';

import PrivateRoute from './components/PrivateRoute'
import { SignUp } from './pages/SignUp';


function App() {
  return (
   
  <>
  <nav>
    <AuthButton/>
    <ul className='header-ul'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/books'>Books</Link></li>
      <li><Link to='/movies'>Movies</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </nav>
    <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/books" element={<BookList />}/>
      <Route  path="/books/:id" element={<Book />}/>
      <Route  path="/movies" element={<PrivateRoute></PrivateRoute>}/>
      <Route  path="/contact" element={<Contact />}/>
      <Route  path="/signup" element={<SignUp />}/>
      

    </Routes>
  </>
  )
}

export default App;
