import {createBrowserRouter} from "react-router";
import DummyjsonApi from "../components/apis/DummyjsonApi"
import FakeStoreApi from "../components/apis/FakeStoreApi"
// import SideBar from "../components/sidebar/sidebar";



const router = createBrowserRouter([
    {
        path : "/fakeProduct",
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
