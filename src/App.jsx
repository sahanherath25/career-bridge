import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AppLayout from "./components/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route  element={<AppLayout/>}>
                    <Route path={"/"} element={<Navigate replace to={"home"}/> }/>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                    <Route path={"/dashboard"} element={<Dashboard/>}/>
                </Route>
                <Route path={"*"} element={<PageNotFound/>}/>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
