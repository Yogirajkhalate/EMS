import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FooterComponent() {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div className="text-center p-3" style={{ backgroundColor: "#e3f2fd" }}>
        © {new Date().getFullYear()} Employee Management System | All Rights Reserved by Yogiraj Khalate
      </div>
    </footer>
  );
}

export default FooterComponent;
