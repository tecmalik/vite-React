
import { Outlet } from "react-router"
import style from "./layout.module.css"
import Header from '../header/Header'
import SideBar from '../sidebar/sidebar'
import Footer from '../footer/Footer'


const Layout =()=>{
    return(
        <div className="mainBody">

            <div className ={style.layOutWrapper}> 
            <Header/>
            <div className = {style.sideBar}> 
                
                <SideBar/>
                <Outlet/>
            </div>
                <Footer/>      
            </div>
        </div>
        
        
    )
}
export default Layout