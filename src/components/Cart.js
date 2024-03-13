import { useState, useEffect } from 'react';
import '../Styles/Cart.css'

function Cart({cart,updateCart}){
     const [isOpen, setisOpen] = useState(true)
    const total = cart.reduce(
        (acc,plantType) => acc + plantType.amount * plantType.price,0
    )

   useEffect(()=>{
    document.title = `LMJ : ${total}F d'achats`
   },[total])
    
   function HandleDelete(nom) {
    const cartcopy = [...cart]
    const c = cartcopy.filter(cart => cart.nom !== nom)
    updateCart(c)
   }

    return isOpen ?(
         <div className="lmj-cart">
            <button className='lmj-cart-toggle-button'
            onClick={() => setisOpen(false)}>Fermer </button>
            {cart.length > 0 ? (
            <div>
            <h2>Panier</h2>
            <ul>
                {cart.map(({nom,price,amount}, index) => (
                    <div key={`${nom}-${index}`}>
                        <li style={{listStyleType:'square'}}>{nom} {price} XAF <b>x</b> {amount} <button className='lmj-delete-article-cart' onClick={() => HandleDelete(nom)}>X</button></li>
                    </div>
                ))}
            </ul>
            <h3>Total : {total} XAF</h3>
            <button className='lmj-cart-toggle-button' style={{color:'rgb(228, 66, 66)'}} onClick={() => updateCart([])}>Vider le panier</button>
            </div> 
            ) : (
                <div  style={{textAlign : 'center', fontFamily:'cursive'}}><br/>Votre panier est vide ! </div>
            )}
         </div>
    ) : (
        <div className='lmj-cart-closed'>
        <button className='lmj-cart-toggle-button' 
        onClick={() => setisOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}
export default Cart