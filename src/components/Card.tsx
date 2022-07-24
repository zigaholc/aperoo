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
    <div className="max-w-[22rem] bg-white rounded-t-[20px] rounded-b-lg overflow-hidden shadow-lg p-3 mb-4 lg:w-1/3">
      <img className="w-full" src={img.url} alt="ape-card" />
      <div className="pt-5">
        <div className="flex justify-between text-neutral">
          <div>{name}</div>
          <div>
            <span className="font-bold">{price}</span> ETH
          </div>
        </div>

        <div className="card-actions mt-4">
          <button
            className="btn btn-primary btn-block"
            onClick={() => increaseCartQuantity(id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}
