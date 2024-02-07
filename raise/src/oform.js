import React from 'react';
import './oform.css';

const OFormComponent = () => {
  return (
    <div className="oformcontainer">
      <header>About your NGO/Organization</header>
      <form>
        <div className="input-field">
          <input className="nameorg" type="text" name="txtorg_name" id="txtorg_name" required />
          <label className='oformlabel'>Name of Organization</label>
        </div>
        <div className="input-field">
          <input className="roleorg" type="text" name="txtorg_role" id="txtorg_role" required />
          <label className='oformlabel'>Role of Organization</label>
        </div>
        <div className="input-field">
          <input className="mailorg" type="email" name="txtorg_mail" id="txtorg_mail" required />
          <label className='oformlabel'>Email of organization</label>
        </div>
        <div className="input-field">
          <input className="contactorg" type="text" name="txtorg_number" id="txtorg_number" required />
          <label className='oformlabel'>Contact no. of organization</label>
        </div>
        <div className="input-field">
          <input className="namemanager" type="text" name="txtmanager_name" id="txtmanager_name" required />
          <label className='oformlabel'>Name of Manager</label>
        </div>
        <div className="input-field">
          <input className="mailmanager" type="text" name="txtmanager_mail" id="txtmanager_mail" required />
          <label className='oformlabel'>Email of Manager</label>
        </div>
        <div className="input-field">
          <input className="contactmanager" type="email" name="txtmanager_number" id="txtmanager_number" required />
          <label className='oformlabel'>Contact no. of Manager</label>
        </div>
        <div className="oformbutton">
          <div className="oforminner"></div>
          <button>SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default OFormComponent;
