import './App.css';
import { Box, Grid, Paper, Typography, AppBar, Tabs, Tab, Button } from '@mui/material';
import { Routes, Route, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import Yes from './pages/Yes';
import No from './pages/No';
import Watch from './pages/Watch';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
            {/* <Route path='/yes' element={<Yes></Yes>}/> */}
            {/* <Route path ='/no' element={<No></No>}/> */}
            <Route path ='/watch-this' element={<Watch></Watch>}/>
            <Route path ='/' element={<Home></Home>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
