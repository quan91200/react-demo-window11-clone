import { Routes, Route } from 'react-router-dom'
import LockScreen from "./Pages/LockScreen"
import Main from "./Pages/Main"

function App() {
  return (
    <Routes>
      <Route path='/' element={<LockScreen />} />
      <Route path='/:name' element={<Main />} />
    </Routes>
  )
}

export default App
