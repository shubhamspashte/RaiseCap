import React from 'react';
import ReactDom from 'react-dom';
import Image from './image';
import Navbar from './navbar';
import  Footer from './footer';
import Main from './main';
// import Hmain from './hmain';
// import LoginPage from './login';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function BrowseCampaign(){
//         return(
//                 <>
//                 <Navbar/>
//                 <Image/>
//                 </>
//         )

// }

// const App = () =>{
//         return(
//         <Router>
//                 <Switch>
//                         <Route path="/" exact component={Hmain} />
//                         <Route path="/Browse" component={Browse} />
//                         <Route path="/contact" component={ContactPage} />
//                         <Route path="/login" component={LoginPage} />
//                 </Switch>
//         </Router>
// );
        
// };


ReactDom.render(
        <React.StrictMode>
                <Navbar/>
                {/* <Hmain/> */}
                <Image/>
                <Main/>/
                <Footer/>
                {/* <LoginPage/> */}
        </React.StrictMode>, 
        document.getElementById('root'))