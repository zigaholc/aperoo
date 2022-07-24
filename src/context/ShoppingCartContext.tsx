import { ReactNode, createContext, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  increaseCartQuantity: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        increaseCartQuantity,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
