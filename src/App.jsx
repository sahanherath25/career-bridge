import './App.css'
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from "react-router-dom";
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
import {Provider} from "react-redux";
import store from "./store.js";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000
        }
    }
});

function App() {

    // const navigate = useNavigation();

    // if(localStorage.getItem("token") === null) {
    //     navigate("/login");
    // }

    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ReactQueryDevtools/>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout/>}>
                                <Route path={"/"} element={<Navigate replace to={"home"}/>}/>
                                <Route path={"/home"} element={
                                    <ProtectedRoutes>
                                        <HomePage/>
                                    </ProtectedRoutes>
                                }/>
                                <Route path={"/login"} element={<LoginPage/>}/>
                                <Route path={"/register"} element={<RegisterPage/>}/>
                                <Route path={"/dashboard"} element={<Dashboard/>}/>
                                <Route path={"/testForm"} element={<TestForm/>}/>
                            </Route>
                            <Route path={"*"} element={<PageNotFound/>}/>

                        </Routes>
                    </BrowserRouter>
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            duration: 3000,
                            style: {
                                border: '1px solid #713200',
                                padding: '16px',
                                color: '#fff',
                                background: '#333',
                            },
                            success: {
                                style: {
                                    background: '#4BB543',
                                    color: '#fff',
                                },
                            },
                            error: {
                                style: {
                                    background: '#fff',
                                    color: '#FF4E42',
                                },
                            },
                        }}
                    />
                </QueryClientProvider>

            </Provider>
        </>
    )
}

export default App
