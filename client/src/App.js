import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FishPrice from "./components/GetFishPrice/FishPrice";
import AddFishPrice from "./components/AddFishPrice/AddFishPrice";
import EditFishPrice from "./components/UpdateFishPrice/EditFishPrice";
import Dashboard from "./components/Dashboard/Dashboard";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginoPage/LoginPage";
import Navbar from "./components/Navbar/Navbar";

// const route = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/fishprice",
//     element: <FishPrice />,
//   },
//   {
//     path: "/addfish",
//     element: <AddFishPrice />,
//   },
//   {
//     path: "/editfish/:id",
//     element: <EditFishPrice />,
//   },
// ]);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar user={user} />}
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={<Dashboard position={user ? user.position : "owner"} />}
          />
          <Route path="/fishprice" element={<FishPrice />} />
          <Route path="/addfish" element={<AddFishPrice />} />
          <Route path="/editfish/:id" element={<EditFishPrice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
