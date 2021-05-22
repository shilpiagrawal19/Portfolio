import React from 'react'
import Portfoliolist from '../portfoliolist/Portfoliolist';
import { useState, useEffect } from "react";
import { featuredPorfolio,
         livePortfolio,
        internshipPortfolio,
         mydesignPortfolio} from "./data.js"


export default function Portfolio() {
    const [selected,setSelected]=useState("featured");
    const [data,setData]=useState([]);

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

        useEffect(() => {

            switch(selected){
                case "featured":
                setData(featuredPorfolio);
                break;
                case "live":
                setData(livePortfolio);
                break;
                case "task":
                setData(internshipPortfolio);
                break;
                case "design":
                setData(mydesignPortfolio);
                break;

                default:
                    setData(featuredPorfolio); 
            }

        },[selected])
    return (
        <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>   
        {list.map((item)=>(
            <Portfoliolist 
            title={item.title}
            active={selected=== item.id}
            setSelected={setSelected}
            id={item.id}/>
        ))}  
        </ul>

        <div className="container">
            {data.map((d) => (
                <div className="item">
                <img className="imgproject" src={d.img} alt=""/>
                <h3>{d.title}</h3>
            </div>
            ))}
           
        </div>
            
        </div>
    )
}
