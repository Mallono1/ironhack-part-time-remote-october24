import { useState, createContext } from 'react';

const ShopContext = createContext({
    products: [],
      cart: [],
      cartSum: 0,
      addItem: () => {},
      removeItem: () => {}
})

function ShopProviderWrapper(props){
    const products = [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 }
      ];
    const [cart, setCart] = useState([]); // storing the list of products in the cart
    const [cartSum, setCartSum] = useState(0); // calculating the total sum of the products in the cart
    const [cartQuantity, setCartQuantity] = useState(0)

    const updateSumAndQuantity = (currentCart) => {
      const updateCartQuantity =  currentCart.reduce((count, curItem) => {
        return count + curItem.quantity;
      }, 0)
      const updateCartSum = currentCart.reduce((count, curItem) => {
        return count + curItem.price * curItem.quantity;
      }, 0)
          setCartSum(updateCartSum)
          setCartQuantity(updateCartQuantity)
    }
    const addProductToCart = (product) => {
        const updatedCart = cart;
        
    
        const updatedItemIndex = updatedCart.findIndex(// check if product exist in cart
          item => item.id === product.id
        );
        console.log('updatedItemIndex', updatedItemIndex)
        if (updatedItemIndex < 0) { 
          updatedCart.push({...product, quantity: 1 });

          setCart(updatedCart)
          updateSumAndQuantity(updatedCart)
        } else { 
          const updatedItem = {
            ...updatedCart[updatedItemIndex]
          };
          updatedItem.quantity++;
          updatedCart[updatedItemIndex] = updatedItem;
          setCart(updatedCart)
          updateSumAndQuantity(updatedCart)
        }
          
          
    }
    
    const removeProductFromCart = (productId) => {
        const updatedCart = cart;
        const updatedItemIndex = updatedCart.findIndex(
            item => item.id === productId
          );
      
          const updatedItem = {
            ...updatedCart[updatedItemIndex]
          };
          updatedItem.quantity--;

          if (updatedItem.quantity <= 0) {
            updatedCart.splice(updatedItemIndex, 1);
            updateSumAndQuantity(updatedCart)
          } else {
            updatedCart[updatedItemIndex] = updatedItem;
            updateSumAndQuantity(updatedCart)
          }
          setCart(updatedCart)
      }

      return (
        <ShopContext.Provider value={
            {
             products,
             cart,
             cartSum,
             cartQuantity,
             addItem: addProductToCart,
             removeItem: removeProductFromCart
           }
          }>
            {props.children}
        </ShopContext.Provider>
      )


}

export { ShopContext, ShopProviderWrapper };