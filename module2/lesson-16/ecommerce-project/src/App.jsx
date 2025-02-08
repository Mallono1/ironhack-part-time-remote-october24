import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />}/>
      </Routes>
       
    </div>
  )
}

export default App
