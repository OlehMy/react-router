import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import User from './pages/User';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='user' element={<User />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
