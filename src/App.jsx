import { useState } from 'react'
import { HomePage } from './Home/pages/HomePage'
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderPartial />
      <HomePage />
    </div>
  )
}

export default App
