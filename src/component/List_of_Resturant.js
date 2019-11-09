import React from "react"
import {Link} from 'react-router-dom'

import  { useState, useEffect } from "react";
const ListOfResturant =()=>{
    const[pdata,setData]=useState([]);
    useEffect(() => {
        async function fetchData() {
        const response= await  fetch('https://chilivery.com/client-api/restaurant/searchAll?page=7&cityId=2')
        const json = await response.json();
        console.log(json.result.restaurant.data);
        setData(json.result.restaurant.data);
        }
        fetchData()
    },[]);
    // console.log(pdata)
    return(
        <div>{
            pdata.map((el,index)=>
                <div key={index}><Link to={`/tehran/${el.restaurantName}`}> {el.restaurantName}</Link></div>
            )
        }
        </div>
    )
}
export default ListOfResturant;