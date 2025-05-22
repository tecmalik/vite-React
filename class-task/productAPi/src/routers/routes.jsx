import {createBrowserRouter} from "react-router";
import DummyjsonApi from "../components/apis/DummyjsonApi"
import FakeStoreApi from "../components/apis/FakeStoreApi"
import Layout from "../components/layout/Layout";



const router = createBrowserRouter([
    {
        path : "",
        element : <Layout/> 
    },
    {
        path:"/dummyjson",
        element : <DummyjsonApi/>
    },
    {
        path : "/fakeProduct",
        element : <FakeStoreApi/> 
    }
])

export default router;
