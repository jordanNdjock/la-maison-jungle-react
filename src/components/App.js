import Banner from './Banner'
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import '../Styles/Layout.css'
import { useState, useEffect } from 'react'

function App(){
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return(
  <div>
    <Banner />
    <div className='lmj-layout-inner'>
        <ShoppingList cart={cart} updateCart={updateCart} /> 
        <Cart cart={cart} updateCart={updateCart}/>
    </div>
    <Footer/> 
  </div>)
}

export default App
