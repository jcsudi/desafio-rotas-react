import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import HomeBody from "./Routes/Home/HomeBody";
import Products from "./Routes/Home/Products";
import Computers from "./Routes/Home/Products/Computers";
import Eletronics from "./Routes/Home/Products/Eletronics";
import Books from "./Routes/Home/Products/Books";
import About from "./Routes/Home/About";
import NotFound from "./Routes/NotFound";
import NotFoundBody from "./Routes/NotFound/NotFoundBody";


function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="products" element={<Products />}>
            <Route path="computers" element={<Computers />} />
            <Route path="eletronics" element={<Eletronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route path='*' element={<NotFound /> } >
          <Route index element={<NotFoundBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App
