type NftProps = {
  id: number
  img: {
    id: string
    url: string
  }
  name: string
  price: number
}

const paginate = (nfts: Array<NftProps>): Array<any> => {
  const itemsPerPage = 4

  const pages = Math.ceil(nfts.length / itemsPerPage)

  const newApes = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    return nfts.slice(start, start + itemsPerPage)
  })

  return newApes
}

export default paginate
