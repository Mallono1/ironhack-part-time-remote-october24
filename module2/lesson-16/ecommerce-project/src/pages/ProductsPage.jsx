import MainNavigation from '../components/MainNavigation/MainNavigation';
import { ShopContext } from '../context/shop-context'
import { useContext } from 'react';

function ProductsPage(){
    const {cart, cartQuantity, products, addItem} = useContext(ShopContext)
    return (
        <>
            <MainNavigation cartItemNumber={cartQuantity}/>
              <main className="products">
                <ul>
                  {products.map(product => (
                    <li key={product.id} style={{ marginBottom: '10px'}}>
                      <div>
                        <strong>{product.title}</strong> - ${product.price}
                      </div>
                      <div>
                        <button onClick={()=> addItem(product)}>
                          Add to Cart
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </main>
        </>
    )
}

export default ProductsPage;