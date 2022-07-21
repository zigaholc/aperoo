import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { cartQuantity } = useShoppingCart()
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-60 font-[700] text-3xl">
          <h1>Aperoo</h1>
          <button>
            {' '}
            <img
              className=""
              style={{ height: '30px', position: 'relative' }}
              src="../../public/imgs/bag.png"
              alt="shopping-bag"
            />
          </button>
          {cartQuantity}
        </nav>
      </div>
    </header>
  )
}
