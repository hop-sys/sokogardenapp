import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Makepayment from './components/Makepayment';

function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sokogarden</h1>
      </header>

      <nav>
        <Link to = "/" className='btn btn-secondary btn-sm m-2'>Home</Link>
        <Link to = "/addproducts" className='btn btn-info btn-sm m-2'>Add products</Link>
        <Link to = "/signin" className='btn btn-secondary btn-sm m-2'>signin</Link>
        <Link to = "/signup" className='btn btn-info btn-sm m-2'>sign up</Link>
      </nav>
      {/* below are our different routes together with our rendered components */}
      <Routes>
        <Route path='/' element={<Getproducts/>} />
        <Route path='/addproducts' element={<Addproducts/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/makepayment' element={<Makepayment/>} />
        <Route path='*' element={<Notfound />}/>
        </Routes>
    </div>
   </Router>
  );
}

export default App;
