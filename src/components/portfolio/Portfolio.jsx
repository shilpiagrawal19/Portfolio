import React from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist';
import { useState } from "react"


export default function Portfolio() {
    const [selected,setSelected]=useState("featured")
    const list=[
        {

        id:"featured",
        title: "Featured"
        },

        {
        id:"live",
        title: "Live Project"
        }, 
        
        {
         id:"task",
        title: "Internship Tasks"
        },
        {
          id:"design",
          title: "My Designs"
         },
]
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>   
        {list.map(item=>(
            <Portfoliolist 
            title={item.title} 
            active={selected=== item.id}
            setSelected={setSelected}/>
        ))}  
        </ul>

        <div className="container">
            <div className="item">
                <img className="imgproject" src="Images/live.png" alt=""/>
                <h3>Juno App</h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/task1.png" alt=""/>
                <h3>Learning App</h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/task2.png" alt=""/>
                <h3>Demo App</h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/mydesign.png" alt=""/>
                <h3>Company Website </h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/mydesign1.png" alt=""/>
                <h3>Company Website</h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/mydesign2.png" alt=""/>
                <h3>Customize website</h3>
            </div>

            <div className="item">
                <img className="imgproject" src="Images/mydesign3.png" alt=""/>
                <h3>Signup form</h3>
            </div>

        </div>
            
        </div>
    )
}
