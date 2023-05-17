import './App.css';
import Header from './components/Management/Header';
import AddProduct from './components/Management/AddProduct';
import AllProducts from './components/Management/AllProducts';
import Home from './components/Management/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UpdateProduct from './components/Management/UpdateProduct';
import Footer from './components/Management/Footer';
import ProductTable from './components/Management/ProductTable';
import Viewmore from './components/Management/ViewMore';
import ReportProduct from './components/Management/ReportProduct';




function App() {
  return (



    <Router>
      <div>
        <Header/>
        
        <Routes>
          
          <Route path= '/' element={<AllProducts/>} />
          <Route path='/addPRODUCT' element={<AddProduct/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/updatePRODUCT/:id' element={<UpdateProduct/>} />
          <Route path='/allPRODUCT-table' element={<ProductTable/>} />
          <Route path='/all-table/updatePRODUCT/:id' element={<UpdateProduct/>} />
          <Route path='/viewPRODUCT/:id' element={<Viewmore/>} />
          <Route path='/reportProduct' element={<ReportProduct/>} />
        
          
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
