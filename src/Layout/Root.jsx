import { Outlet } from "react-router-dom";
import Aside from "../components/Aside/Aside";

const Root = () => {
    return (
        <div className="flex">
            <Aside></Aside>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;