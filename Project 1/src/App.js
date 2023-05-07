import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/productDetail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
