import { useShoppingCart } from '../context/ShoppingCartContext'

type CardProps = {
  id: number
  img: {
    id: string
    url: string
  }
  name: string
  price: number
}

export function Card({ id, img, name, price }: CardProps) {
  const { increaseCartQuantity } = useShoppingCart()
  return (
    <div className="max-w-[22rem] bg-white rounded-t-[20px] rounded-b-lg overflow-hidden shadow-lg p-3 mb-4">
      <img className="w-full" src={img.url} alt="ape-card" />
      <div className="pt-5">
        <div className="flex justify-between">
          <div>{name}</div>
          <div>{price} ETH</div>
        </div>
        <button
          className="w-full mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => increaseCartQuantity(id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}
