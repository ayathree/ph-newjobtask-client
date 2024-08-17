import { Outlet } from "react-router-dom";
import Nav from "./page/Nav";
import Footer from "./page/Footer";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;