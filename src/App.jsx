import "./App.css";
import LandingPage from "./component/LandingPage";
import { Route, Routes } from 'react-router-dom';
import AboutUS from "./component/AboutUs";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUS/>} />
      </Routes>
    </>
  )
}

export default App;
