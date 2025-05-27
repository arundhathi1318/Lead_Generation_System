import { useState } from 'react'
import LeadForm from './Components/LeadForm';
import LandingPage from './Components/LandingPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <LandingPage/>
     </div>
    </>
  )
}

export default App
