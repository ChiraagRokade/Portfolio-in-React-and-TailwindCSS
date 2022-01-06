import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import 'aos/dist/aos.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/Projects' element = {<Projects />} />
          <Route path = '/Contact' element = {<Contact />} />
          <Route path = '/Resume' element = {<Resume />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
