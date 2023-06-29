import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Book } from './pages/Book'
import { Movies } from './pages/Movies';
import AuthButton from './AuthButton';

import { Provider } from 'react-redux';
import store from './store.js';
import { BookList } from './pages/BookList';


function App() {
  return (
    <Provider store={store}>
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
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />}/>
      <Route path="/books/:id" element={<Book />}/>
      <Route path="/movies" element={<Movies />}/>

    </Routes>
  </>
  </Provider>
  )
}

export default App;
