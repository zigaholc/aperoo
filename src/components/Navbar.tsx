import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { cartQuantity } = useShoppingCart()
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-60 font-[700] text-3xl">
          <h1>Aperoo</h1>
          <button className="relative">
            <img
              className=""
              style={{ height: '30px', position: 'relative' }}
              src="../../public/imgs/bag.png"
              alt="shopping-bag"
            />
            <div className="absolute top-4 left-4 text-2xl bg-white hover:bg-gray-200 text-gray-800 py-1 px-3 rounded-full">
              {cartQuantity}
            </div>
          </button>
        </nav>
      </div>
    </header>
  )
}
