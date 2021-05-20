import {ExpandMore} from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react"



export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:false,
            backDelay:1000,
            backSpeed:80,
            showCursor:true,
            strings: [" Developer"] //we can aad many more by seprating comma
        })
    },[]);
    return (
        <div className="intro" id="intro">
        <div className="left">
            <div className="imgContainer">
                <img className="meimg" src="images/mee2.jpeg" alt=""/>
            </div>
        </div>
        <div className="right">
        <div className="wrapper">
        <h2> Hi There ,I'm</h2>
        <h1>Shilpee Agrawal</h1>
        <h3>Software<span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
        <ExpandMore className="iconDown "/>
                </a>
        </div>
           
        </div>
    )
}
