import { HashRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Todo from "./Pages/Todo"

function App() {
  return <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="user/:id" element={<Todo />}></Route>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
