import "./portfoliolist.scss"


export default function Portfoliolist({title, active, setSelected}) {
    return (
        
            <li className={active ? "portfolioList active":"portfolioList"}>
              {title}
            
            </li>
        
    )
}
