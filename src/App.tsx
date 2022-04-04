import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookingDashboard from './component/bookingdashboard';
import BookingDetails from './component/bookingdetails';
import './App.css';
import BookingModal from './component/Bookingmodal';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<BookingDashboard />} />
                <Route path="booking/:id" element={<BookingDetails />} />
                <Route path="modal" element={<BookingModal />} />
            </Routes>
        </div>
    );
}

export default App;
