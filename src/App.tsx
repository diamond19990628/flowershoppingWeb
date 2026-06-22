
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import LoginForm from "./pages/LoginForm";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<LoginForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}