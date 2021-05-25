
export default function Menu({Open,setOpen}) {
    return (
        <div className={"menu " + (Open && "active")}>
        <ul>
            <li onClick={()=>setOpen(false)}>
            <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setOpen(false)} >
            <a href="#about">About</a>
            </li>
            <li onClick={()=>setOpen(false)}>
            <a href="#skill">Skills</a>
            </li> 
            <li onClick={()=>setOpen(false)}>
            <a href="#portfolio">Portfolio</a>
            </li>
                      
             <li onClick={()=>setOpen(false)}>
            <a href="#contact">Contact</a>
            </li>
        </ul>
            
        </div>
    );
}

