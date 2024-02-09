import React from 'react';
import './iform.css';

function IFormComponent() {
  return (
    <div className="container">
      <header>About your fundraiser</header>
      <form>
        <div className="input-field">
          <input className="name" type="text" name="txt_name" id="txt_name" required />
          <label>Full name</label>
        </div>
        
        <div className="input-field">
          <input className="mailorg" type="email" name="txtorg_mail" id="txtorg_mail" required />
          <label>Email of organization</label>
        </div>
        
        <div className="input-field">
          <input className="contact" type="text" name="txt_number" id="txt_number" required />
          <label>Contact no. </label>
        </div>
        
        <div className="input-field">
          <input className="address" type="text" name="txtadd_name" id="txtadd_name" required />
          <label>Address</label>
        </div>
        
        <div className="input-field">
          <input className="mail" type="text" name="txt_mail" id="txt_mail" required />
          <label>Email</label>
        </div>
        
        <div className="input-field">
          <input className="nationalitu" type="text" name="txt_name" id="txt_name" required />
          <label>Nationality</label>
        </div>
        
        <div className="input-field">
          <input className="cityres" type="text" name="txt_name" id="txt_name" required />
          <label>City</label>
        </div>
        
        <div className="button">
          <div className="inner"></div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default  IFormComponent;
