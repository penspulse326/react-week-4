import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Login from "./Pages/Login"

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />}></Route>
        <Route path="user/:id" element={<></>}></Route>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
