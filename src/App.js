import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Cart from '../src/pages/Cart/Cart';
import Signin from '../src/pages/Signin/Signin';
import Signup from '../src/pages/Signup/Signup';
import Contact from '../src/pages/Contacts/Contact';
import Payment from '../src/pages/Payment/Payment';
import Order from '../src/pages/Order/Order';
import Account from './pages/Account/Account';
import Admin from './pages/Admin/Admin';
import Chat from '../src/pages/Chat/Chat';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import ProtectedRoute from './Auth/ProtectedRoute';
import { UserProvider } from './Auth/Context/UserContext';
function App() {
  return (
    <UserProvider>
    <div className="App">
    
    <Router>
      <Routes>
        <Route path='/washo' element={<Home/>}></Route>
        <Route path='/washo/signin' element={<Signin/>}></Route>
        <Route path='/washo/signup' element={<Signup/>}></Route>
        <Route path='/washo/contact' element={<Contact/>}></Route>
        <Route path='/washo/chat' element={<Chat/>}></Route>
        <Route path='/washo/admin/admindashboard' element={<AdminDashboard/>}></Route>
        <Route path='/washo/account' element={<ProtectedRoute><Account/></ProtectedRoute>}></Route>
        <Route path='/washo/payment' element={<ProtectedRoute><Payment/></ProtectedRoute>}></Route>
        <Route path='/washo/order' element={<ProtectedRoute><Order/></ProtectedRoute>}></Route>
        <Route path='/washo/cart' element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route>
        <Route path='/washo/admin' element={<ProtectedRoute><Admin/></ProtectedRoute>}></Route>
        
      </Routes>
    </Router>
    </div>
    </UserProvider>
  );
}

export default App;
