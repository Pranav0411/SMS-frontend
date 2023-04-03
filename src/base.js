import CusNavbar from "./CusNavbar";
import Example from "./test";

import Navb from "./test";

const Base = ({ title = "Welcome to the SMS", children }) => {

    return (

        <div className="container-fluid p-0 m-0" id="base">

            <Example />
            { children }

            

        </div>
        );

};

export default Base;