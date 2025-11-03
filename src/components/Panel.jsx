import React from "react";
import { Link } from "react-router-dom";

const Panel = ({header, text, route})=>{
    return<>
        <div className="container">
            <p className="text big-txt">{header}</p>
            <p className="text mg-up-1rem">{text}</p>
            <div className="btn">
              <Link to={route}> Laern More</Link>
            </div>
          </div>
    </>
}
export default Panel;