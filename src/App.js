<<<<<<< Updated upstream
import "./App.css";
import Login from "./components/pages/auth/login";

function App() {
  return (
    <Login/>
  )
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./components/pages/listpage/ListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListPage></ListPage>} path="/" />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default App;
