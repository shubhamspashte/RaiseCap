import Navbar from './navbar';
import  Footer from './footer';
import Homepage from './homepage';
import Browse from './browseacampaign';
import LoginPage from './login';
import SignupPage from './signup';
import Start from './start';
import OFormComponent from './oform';
import IFormComponent from './iform';
import BlogPage from './blog';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ProfilePage from './profile';

function App(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Homepage/>}/>
                    <Route exact path='/Browse' element={<Browse/>}/>
                    <Route exact path='Loginpage' element={<LoginPage/>}/>
                    <Route exact path='Signuppage' element={<SignupPage/>}/>
                    <Route exact path='Start'  element={<Start/>}/>
                    <Route exact path='OFormComponent' element={<OFormComponent/>}/>
                    <Route exact path='IFormComponent' element={<IFormComponent/>}/>
                    <Route exact path='BlogPage'  element={<BlogPage/>}/>
                    <Route exact path='ProfilePage' element={<ProfilePage/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    ); 
};

export default App;