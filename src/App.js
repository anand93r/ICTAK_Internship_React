import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CurrentCourses from './Components/Home/CurrentCourses';
import Statbox from './Components/Home/Statbox';
import ScrollUpArrow from './Components/ScrollUpArrow';
import SingleCoursePage from './Components/SingleCoursePage';

function App() {
  return (
    <div className="App">
       <Header/>
       {/* <SingleCoursePage></SingleCoursePage> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
     
      </Routes>
      <Statbox/>
      <CurrentCourses/>
      <ScrollUpArrow></ScrollUpArrow>
      <Footer/>
    </div>
  );
}

export default App;
