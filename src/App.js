import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Cart from '../src/pages/Cart/Cart';
import Signin from '../src/pages/Signin/Signin';
import Signup from '../src/pages/Signup/Signup';
import Contact from '../src/pages/Contacts/Contact';
import Payment from '../src/pages/Payment/Payment';
import Order from '../src/pages/Order/Order';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/washo' element={<Home/>}></Route>
        <Route path='/washo/cart' element={<Cart/>}></Route>
        <Route path='/washo/signin' element={<Signin/>}></Route>
        <Route path='/washo/signup' element={<Signup/>}></Route>
        <Route path='/washo/contact' element={<Contact/>}></Route>
        <Route path='/washo/payment' element={<Payment/>}></Route>
        <Route path='/washo/order' element={<Order/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
