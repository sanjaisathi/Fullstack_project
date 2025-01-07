import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Samplefunc/Home';
import About from './Components/Samplefunc/About';
import Gallery from './Components/Samplefunc/Gallery';
import Contact from './Components/Samplefunc/Contact';
import NavBar from './Components/Samplefunc/Navbar';
import Form from './Components/Samplefunc/Form';
import UseEffect from './Components/Hooks/UseEffect';
import UseRef from './Components/Hooks/UseRef';
import ExamResults from './Components/Hooks/UseContext';
import UseMemo from './Components/Hooks/UseMemo';
import SignUp from './Components/Samplefunc/Signup';
import Login from './Components/Samplefunc/login';  // Corrected import for Login

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            {/* Routes for navigation */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About college="Kongu Engineering" clg1="Kongu Arts" clg2="Naturopathy" />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/usecontext" element={<ExamResults />} />
            <Route path="/useref" element={<UseRef />} />
            <Route path="/usememo" element={<UseMemo />} />
            
          </Routes>
        </main>
      </BrowserRouter>

      {/* Form displayed at the bottom of the page */}
      <Form />
    </div>
  );
}

export default App;
