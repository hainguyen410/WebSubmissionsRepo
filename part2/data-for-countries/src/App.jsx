import { useState } from 'react'
import Display from './component/display'

function App() {
  const [searchCountry, setSearchCountry] = useState("")

  return (
    <div>
      find countries <input type="text" value={searchCountry} onChange={(e) => setSearchCountry(e.target.value)}/>
      <Display searchCountry={searchCountry} setSearchCountry={setSearchCountry}/>
    </div>
  )
}

export default App
