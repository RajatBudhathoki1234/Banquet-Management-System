import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";

import {
  Header,
  HomePage,
  About,
  Login,
  Register,
  ForgetPass,
  Blog,
  Gallery,
  CreateBanquet,
  DisplayBanquet,
  ChangePassword,
  Menu,
  DisplayMenu,
  BookBanquet,
  Contact,
  PageNotFound,
} from "./components";

function App() {
  const [checkLogin, setCheckLogin] = useState(false);

  const [userId, setUserid] = useState(null);

  const getCookies = async () => {
    try {
      const response = await axios.get("/api/checkLoginCookie");
      setCheckLogin(response.data.success);
      setUserid(response.data.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLoginCookie = async () => {
    try {
      const response = await axios.get("/api/deleteLoginCookies");
      setCheckLogin(response.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCookies();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header checkLogin={checkLogin} deleteFun={deleteLoginCookie} />
        <Routes>
          <Route
            path="/"
            element={<HomePage checkLogin={checkLogin} />}
          ></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>

          {/* if user is loged in then only this route exists*/}
          {checkLogin && (
            <>
              <Route
                path="/banquet/:token"
                element={<DisplayBanquet userId={userId} />}
              ></Route>
              <Route path="/createBanquet" element={<CreateBanquet />}></Route>
              <Route path="/menu/:token" element={<Menu />}></Route>
            </>
          )}

          {/* If user is not loged in then only this route exists */}
          {!checkLogin && (
            <>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/forgetPass" element={<ForgetPass />}></Route>
              <Route
                path="/changePassword/:id"
                element={<ChangePassword />}
              ></Route>
            </>
          )}
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route
            path="/DisplayMenu/:userId/:token/:banquetName"
            element={<DisplayMenu />}
          ></Route>
          <Route path="/bookBanquet" element={<BookBanquet />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
