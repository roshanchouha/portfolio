import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
       <App />
   </BrowserRouter>
)
