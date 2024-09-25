import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/dashboard/Users';


export default function AppRoutes(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}>
                <Route path='users' element={<Users/>}/>
            </Route>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>
    );
}