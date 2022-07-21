import { CardList } from './components/CardList'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <CardList />
    </ShoppingCartProvider>
  )
}

export default App
