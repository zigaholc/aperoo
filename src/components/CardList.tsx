import { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'

export function CardList() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [apes, setApes] = useState(Array<any>)

  useEffect(() => {
    if (loading) return
    setApes(data[page])
  }, [loading, page])

  const handlePage = (index: number):void => {
    setPage(index)
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        {apes.map((ape) => (
          <Card key={ape.id} {...ape} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {!loading && <div>
          {data.map((_,index) => {
            return (<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" key={index} onClick={() => handlePage(index)}>{index}</button>)
          })}
        </div>}
      </div>
    </div>
  ) 
}
