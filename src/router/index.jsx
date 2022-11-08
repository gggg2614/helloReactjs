import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import List from "../pages/List";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/list" element={<List></List>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  </BrowserRouter>
);

export default BaseRouter;
