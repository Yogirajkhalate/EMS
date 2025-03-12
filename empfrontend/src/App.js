import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './component/HeaderComponent';
import Employee from './component/Employee';
import FooterComponent from './component/FooterComponent';
function App() {
  return (
    <>
          <HeaderComponent />
       <Employee />
       <FooterComponent />
    </>
  );
}

export default App;
