import { useShoppingCart } from '../context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return <>{isOpen && <div>hello</div>}</>
}
