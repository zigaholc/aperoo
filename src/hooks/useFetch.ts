import { useState, useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import paginate from '../utils/utils'

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.hygraph.com/v2/cl5tw1sk02tyg01tbhw85843z/master'
)

const QUERY = gql`
  {
    nfts {
      id
      name
      img {
        id
        url
      }
      price
    }
  }
`

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(Array<any>)

  const getNfts = async () => {
    const { nfts } = await graphcms.request(QUERY)
    setData(paginate(nfts))
    setLoading(false)
  }

  useEffect(() => {
    getNfts()
  }, [])

  return { loading, data }
}
