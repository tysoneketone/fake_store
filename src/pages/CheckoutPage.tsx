import { Product } from '../types/product';
import { Link } from 'react-router-dom';
import { getTotalAmount } from '../utils/getTotalAmount';
import { CheckoutItem } from '../components/Checkout/CheckoutItem';
import { Button } from '@material-ui/core'

interface Props {
  cartItems?: Product[];
  addToCart: (clickedItem: Product) => void;
  addOrderedItems: (orderedItems: Product[]) => void;
  removeFromCart: (id: number) => void;
}

export const CheckoutPage: React.FC<Props> = ({ cartItems, addToCart, addOrderedItems, removeFromCart }) =>
  <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
    <h1 className="w-full my-5 text-4xl text-center font-bold">Your Purchase Summary</h1>
    <div className="w-full md:w-3/5 mx-auto mb-10">
      { cartItems?.map(item => (
        <CheckoutItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h3 className="my-5 text-xl md:text-xl px-5 md:px-2">
        <span className="font-bold mr-1">Total Purchase:</span>
        <span>${getTotalAmount(cartItems)}</span>
      </h3>
      <Button
        component={Link}
        to='/confirmation'
        variant="contained"
        color="primary"
        className="w-full"
        onClick={() => addOrderedItems(cartItems || []) }
      >Confirm Purchase</Button>
    </div>
  </div>
