
import { Outlet } from "react-router"
import style from "./layout.module.css"
import Header from '../header/Header'
import SideBar from '../sidebar/sidebar'
import Footer from '../footer/Footer'
import { Link } from "react-router"


const Layout =()=>{
    return(
        <div> 
            <Header/>
            <div className = {style.sideBar}> 
                
                <SideBar/>
                <Outlet/>
            </div>
            <footer/>
            <Footer/>      
        </div>
        
    )
}
export default Layout