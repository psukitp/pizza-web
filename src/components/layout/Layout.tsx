import Footer from "../footer/Footer";
import Header from "../header/Header";
import Selection from "../selection/Selection";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header />
            <Selection />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;