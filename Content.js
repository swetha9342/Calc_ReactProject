import React from "react";

const Content = () => {
    const HandleChange= () =>{
        const words=["earn","grow","Give"]
        const int=Math.floor(Math.random()*3)
        return words[int]
    }
    return (
        <div className='div2'>
            <h1>To {<HandleChange />} Money</h1>
        </div>
    )
}
export default Content;