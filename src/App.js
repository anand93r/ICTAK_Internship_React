import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CurrentCourses from './Components/Home/CurrentCourses';
import Statbox from './Components/Home/Statbox';

function App() {
  return (
    <div className="App">
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      
      </Routes>
      <Statbox/>
      <CurrentCourses/>
      <Footer/>
    </div>
  );
}

export default App;
