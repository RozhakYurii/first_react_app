import React from "react";
import Particles from "react-particles-js";
import  backgroundParams from "./BackgroundParams";

const Background = () => {

    return (
        <Particles className={"particles"}
            params={backgroundParams}
            style={{
                width: '100%',
                height: '100%'
            }}/>
    );
};

export default Background;