import { Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <AllRoutes/>

    <Route>
    <Route path="/" element={<Home/>} />
    <Route path "/login" element ={<Login />}/>
    <Route path="/productdetailspages"element ={<ProdctDetalsPages/>}/>
    </Route>
    </>
  )
}

export default App
