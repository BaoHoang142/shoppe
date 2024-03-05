import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dangnhap" element={<Login></Login>}></Route>
        <Route path="/dangky" element={<Register></Register>}></Route>
        <Route path='/profile' element={<ProfileUser></ProfileUser>}></Route> 
        {/* <Route path='/donmua' element={<OrderUser></OrderUser>}></Route> */}
        {/* <Route path='/dangky-cuahang' element={<RegisterStore></RegisterStore>}></Route> */}
        {/* <Route path='/them-cuahang' element={<AddStore></AddStore>}></Route> */}
        {/* <Route path='/chitiet/:id' element={<ProductDetails></ProductDetails>}></Route> */}
        {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
        {/* <Route path="/admin/products" element={<ProductsAdmin />} /> */}
        {/* <Route path="/admin/shop" element={<ShopAdmin />} /> */}
        {/* <Route path="/admin/users" element={<UserAmin />} /> */}
        {/* <Route path="/themsanpham" element={<AddProducts />} /> */}
        {/* <Route path="/order" element={<OrderDetail />} /> */}
        {/* <Route path="/danhsachsanpham" element={<ShopProducts />} /> */}
        {/* <Route path="/girlfashion/:id" element={<GirlFashion />} /> */}
      </Routes>
    </div>
  );
}
