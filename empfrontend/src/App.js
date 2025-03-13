import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './component/Employee';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddEmployee from './component/AddEmployee';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <HeaderComponent />  
        <Routes>
              <Route path='/' element={ <Employee />}></Route>
              <Route path='/employees' element={ <Employee />}></Route>
              <Route path='/Add-Employee' element={ <AddEmployee />}></Route>
              
        </Routes>
        
        <FooterComponent /> 
    </BrowserRouter>
    
    </>
  );
}

export default App;
