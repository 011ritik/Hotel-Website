import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Facilities from './pages/FacilityPage';
import Room from './pages/RoomPage'
import Contact from './pages/ContactPage';

import HotelNav from './components/navbar';
import Footer from './components/footer';


function App() {

  let facilities = []
 
  return (
    <>
   
    <Router>
    <HotelNav />
      <Routes>
        <Route element={<HomePage background='images/background.png' />} path=''/>
        <Route element={<Facilities  background='images/mainbg.png' />} path='/facilities'/>
        <Route element={<Room background='images/rooms.png' />} path='/rooms'/>
        <Route element={<Contact />} path='/contact'/>
        
      </Routes>
    <Footer />

    </Router>
      {/* <HomePage background={home_bg} />
      <Facilities background={facility_bg}/>
      <Room background={room_bg}/>
      <Contact />  */}
    </>
  );
}

export default App;
