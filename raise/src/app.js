import Navbar from './navbar';
import  Footer from './footer';
import Homepage from './homepage';
import Browse from './browseacampaign';
import LoginPage from './login';
import SignupPage from './signup';
import Start from './start';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Homepage/>}/>
                    <Route path='/Browse' element={<Browse/>}/>
                    <Route path='Loginpage' element={<LoginPage/>}/>
                    <Route path='Signuppage' element={<SignupPage/>}/>
                    <Route path='Start'  element={<Start/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    ); 
};

export default App;