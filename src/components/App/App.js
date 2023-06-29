import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../index.css';

function App() {
  const [screen, setScreen] = useState(window.innerWidth);

  return (
    <div className="app">
      <Router>
        <Header screen={screen} />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
