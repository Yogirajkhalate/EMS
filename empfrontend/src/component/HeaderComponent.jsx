import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderComponent() {
  return (
    <div className="container">
      <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
       
        <a className="navbar-brand">Employee Management System</a>
      </nav>
    </div>
  );
}

export default HeaderComponent;
