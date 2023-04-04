import React from "react";
import Text from "./Text";
import Image from "./Image";
import app from "../images/app-launch.png"

const Header = () => {
  return (
    <div>
      <div className="head">
        <Text text="Gmail" className="head-text"/>
        <Text text="Images" className="head-text"/>
        <Image src={app} alt="app-launcher" width="3%" height="35px" className="app"/>
        <Text text="C" className="head-name"/>
      </div>
    </div>
  );
};

export default Header;
