import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Spotitube from './pages/projects/Spotitube';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import Home from './components/Home';
import ApplicationTracker from './pages/projects/ApplicationTracker';
import LeetcodeSolution from './pages/projects/LeetcodeSolution';
import Contact from './pages/Contact';
import Resume from './pages/Resume.jsx';
import DataPlatform from './pages/projects/DataPlatform';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/spotitube' element={<Spotitube />} />
        <Route path='/application' element={<ApplicationTracker />} />
        <Route path='/leetcode' element={<LeetcodeSolution />} />
        <Route path='/dpmc' element={<DataPlatform />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
