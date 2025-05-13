// i need a component called Outlet it helps to navigate through nested components;

import { Outlet } from "react-router"
import SideBar from "../sideBar/SideBar"
import Footer from "../footer/Footer"
import style from "./layout.module.css"


const Layout =()=>{
    return(
        <div className = {style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutlet}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
export default Layout;