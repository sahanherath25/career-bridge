import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AppLayout from "./components/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";
import TestForm from "./pages/TestForm.jsx";


const queryClient=new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:60*1000
        }
    }
});

function App() {


  return (
    <>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <BrowserRouter>
                <Routes>
                    <Route  element={<AppLayout/>}>
                        <Route path={"/"} element={<Navigate replace to={"home"}/> }/>
                        <Route path={"/home"} element={<HomePage/>}/>
                        <Route path={"/login"} element={<LoginPage/>}/>
                        <Route path={"/register"} element={<RegisterPage/>}/>
                        <Route path={"/dashboard"} element={<Dashboard/>}/>
                        <Route path={"/testForm"} element={<TestForm/>}/>
                    </Route>
                    <Route path={"*"} element={<PageNotFound/>}/>

                </Routes>
            </BrowserRouter>
            <Toaster/>
        </QueryClientProvider>

    </>
  )
}

export default App
