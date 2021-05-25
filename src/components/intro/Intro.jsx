import {ExpandMore} from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import mypic from "../../Assets/mee2.jpeg"
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';





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
        <Rotate top left>
            <div className="imgContainer">
                <img className="meimg" src={mypic} alt="My img"/>
            </div>
            </Rotate>
        </div>
        <div className="right">
            <div className="wrapper">
            <Fade top>
            <h2> Hi There ,I'm</h2></Fade>
             <Fade right>    <h1>Shilpee Agrawal</h1></Fade>
               <Fade bottom> <h3>Software<span ref={textRef}></span></h3></Fade>
        </div>
        <a href="#portfolio">
        <ExpandMore className="iconDown "/>
                </a>
        </div>
           
        </div>
    );
}
