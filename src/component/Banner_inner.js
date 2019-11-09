import React from "react"
import styled  from "styled-components"
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import  {BrowserRouter as Router,Link, Route} from "react-router-dom"

const TehranResturant=styled.button`
width:150px;
height:40px;
background:rgba(0,0,0,0.5);
border:1px solid black;
font-size:18px;
color:white;
position: absolute;
top: 50%;
left: 50%;
margin-left: -75px;`

function BannerInner(props){
    console.log(props)
    return ( 
       <TehranResturant onClick={()=>{props.history.push('/tehran')}}>رستوران های تهران</TehranResturant>
    )
   
}
export default withRouter(BannerInner);