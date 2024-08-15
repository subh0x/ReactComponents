import { useState } from 'react'
import './App.css'
import { Accordion } from './components/accordion'
import RandomColorGenerator from './components/randomcolorgenerator'
import { ReviewContainer } from './components/review-container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Component - Accordion */}
      {/* <Accordion /> */}
      {/* Component - Random Color Generator */}
      {/* <RandomColorGenerator /> */}
      <ReviewContainer />
    </>
  )
}

export default App
