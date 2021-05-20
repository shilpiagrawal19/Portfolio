
export default function Menu({Open,setOpen}) {
    return (
        <div className={"menu " + (Open && "active")}>
        <ul>
            <li onClick={()=>setOpen(false)}>
            <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setOpen(false)}>
            <a href="#portfolio">Portfolio</a>
            </li>
             <li onClick={()=>setOpen(false)}>
            <a href="#works">Projects</a>
            </li> 
            <li onClick={()=>setOpen(false)} >
            <a href="#testimonial">Testimonials</a>
            </li>           
             <li onClick={()=>setOpen(false)}>
            <a href="#contact">Contact</a>
            </li>
        </ul>
            
        </div>
    )
}

