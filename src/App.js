import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import ScrollUpArrow from './Components/ScrollUpArrow';
import Admin from './Components/Admin';
import AddEdit from './Components/AddEdit';
import SingleCoursePage from './Components/SingleCoursePage';
import Courses from './Components/Home/Courses';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
       <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/courses/details' element={<SingleCoursePage/>}></Route>
      
        <Route path='/admin/dashboard' element={<Admin/>}></Route>
        <Route path='/admin/dashboard/addedit' element={<AddEdit/>}></Route>
        <Route path='/signup' element = {<SignUp/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
       
      </Routes>
     
      <ScrollUpArrow></ScrollUpArrow>
      <Footer/>
    </div>
  );
}

export default App;
