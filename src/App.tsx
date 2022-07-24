import { CardList } from './components/CardList'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <div className="container mx-auto">
        <Navbar />
        <CardList />
      </div>
    </ShoppingCartProvider>
  )
}

export default App
