import { useContext } from 'react';
import { ShopContext } from '../context/shop-context'
import MainNavigation from '../components/MainNavigation/MainNavigation';

const CartPage = () => {
const { cart, cartQuantity, removeItem }= useContext(ShopContext);
    return (
        <>
          <MainNavigation cartItemNumber={cartQuantity}/>
          <main className="cart">
            {cart.length <= 0 && <p>No Item in the Cart!</p>}
            <ul>
              {cart.map(cartItem => (
                <li key={cartItem.id} style={{ marginBottom: '10px'}}>
                  <div>
                    <strong>{cartItem.title}</strong> - ${cartItem.price} (
                    {cartItem.quantity})
                  </div>
                  <div>
                    <button onClick={() => removeItem(cartItem.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </>
      );
    }
  export default CartPage;