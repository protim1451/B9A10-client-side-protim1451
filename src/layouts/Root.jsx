import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto" style={{ backgroundColor: '#F5F5F5' }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Root;