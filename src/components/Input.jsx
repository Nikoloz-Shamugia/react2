import React from "react";

const InputWrapper = () => {
    const inputStyles = {
        width: '100%',
        height: '32px',
        borderRadius: '15px',
        padding: '0px 15px',
        margin : '8px 0'
    };
    const buttonStyles = {
        position: 'absolute',
        right: '0px',
        top : '50%' ,
        transform : 'translate(0, -50%)'
    };
    const relativeForm ={
        position : 'relative'
    }
    return (
        <form style={relativeForm}>
            <input type="text" placeholder="Enter text" style={inputStyles} />
            <button style={buttonStyles}>
                <img src="valid-image-source.jpg" alt="Some Alt Text" />
            </button>
        </form>
    );
};

export default InputWrapper;
