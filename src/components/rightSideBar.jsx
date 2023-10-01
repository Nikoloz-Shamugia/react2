import React from "react";
import InputWrapper from "./Input";
const RightBar = () => {
    const rightBarStyle = {
        width : 'calc(100% - 350px)',
        padding : '0px 150px'
    }
    return (
        <div style={rightBarStyle}>
            <div>
            </div>
            <div>
                <InputWrapper />
                <InputWrapper />
            </div>
        </div>
    );
};

export default RightBar;
