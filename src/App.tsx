import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Todo from "./Pages/Todo";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />}></Route>
            <Route path="signup" element={<SignUp />}></Route>
            <Route path="todo" element={<Todo />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;
