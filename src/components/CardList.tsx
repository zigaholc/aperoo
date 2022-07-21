import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'

type NftProps = {
  id: number
  img: {
    id: string
    url: string
  }
  name: string
  price: number
}

export function CardList() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(1)
  const [apes, setApes] = useState(Array<any>)

  useEffect(() => {
    if (loading) return
    setApes(data[page])
  }, [loading])

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        {apes.map((ape) => (
          <Card key={ape.id} {...ape} />
        ))}
      </div>
    </div>
  )
}
