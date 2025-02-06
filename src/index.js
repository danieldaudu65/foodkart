import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Policy from './Privacy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './components/navbar/Navbar';
// import { Toaster } from 'react-hot-toast'; // Import the Toaster component
// import 'react-toastify/dist/ReactToastify.css';
// import NotFound from './pages/notFound';
import DeleteAccount from "./DeleteAccount";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="privacy-policy" element={<Policy />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        {/* <Route path="delete-account" element={<DeleteAccount />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

