import React from 'react'
import './footer.css'


const Footer = () => {
return (
    <div className='footer'>
      <img className='flogo' src="/logo.png" alt="Raise_Logo" />
      <font className='footerhead' size='18'>RaiseCap</font>
      <div className='content'>
        <a className='s' href='/'><p>Support</p></a>  
        <a className='o' href='/'><p className='c'>FAQ's & Help Center</p></a>
        <a className='o' href='/'><p className='c'>Trust and Safety</p></a>
        <a className='o' href='/'><p className='c'>Plan & Pricing</p></a>
        <a className='o' href='/'><p className='c'>Contact us</p></a>
      </div>
      <hr></hr>
      <div className='contact'>
        <a className='logo' href="/"><img src="/wp.png"height="36"alt="wp icon"/></a>
        <a className='logo' href="/"><img src="/ig.png"height="36"alt="wp icon"/></a>
        <a className='logo' href="/"><img src="/fb.webp"height="36"alt="wp icon"/></a>
        <a className='logo' href="/"><img src="/yt.png"height="36"alt="wp icon"/></a>
        <p className='para'>For any queries<br/>Email us at<br/>raisecapXXXX</p>
        <p className='para'>Copyright &copy; 2004 RaiseCap Ventures Pvt Ltd. <br/> All Rights Reserved <br/>
        <a className='p' href="/">
          Terms of Use
        </a>|
        <a className='p' href="/">
          Privacy Policy
        </a>
        </p>
      </div>
    </div>
);
};
export default Footer;
