import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import  './index.css'

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const products = [
    { id: 1, name: 'Product 1', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgr4Ye2xoTDUr0k5SBi1yPKtIL-RRZ2yxxLQ&s' },
    { id: 2, name: 'Product 2', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUopDX7zaK2niu6RL3rnGEJ4TWLBkMP9VXJw&s' },
   
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} total={total} />
    </div>
  );
};

export default App;
