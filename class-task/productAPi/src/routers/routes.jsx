import {createBrowserRouter} from "react-router";
import DummyjsonApi from "../components/apis/DummyjsonApi"
import {fakeStoreApi} from "../services/FakestoreApi";
import SideBar from "../components/sidebar/sidebar";



const router = createBrowserRouter([
    {
        path:"",
        element : < DummyjsonApi/>
    },
    {
        path:"",
        element: < fakeStoreApi /> 
    }
])

export default router;
