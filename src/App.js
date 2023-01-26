// Import route and our components
import { Route, Routes } from 'react-router-dom'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import Nav from './components/Nav'

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price/:symbol' element={<Price />} />
      </Routes>
    </div>
  )
}
