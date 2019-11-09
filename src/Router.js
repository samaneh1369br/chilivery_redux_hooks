import {BrowserRouter ,Switch,Route,Redirect} from "react-router-dom"
import React from 'react'
import BannerBox from "./component/Banner_box"
import ListOfResturant from "./component/List_of_Resturant"
import ResturantMenu from "./component/ResturantMenu"
const Routers =()=>{

    return(
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={BannerBox} />
                    <Route exact path="/tehran" component={ListOfResturant} />
                    <Route exact path="/tehran/:id" component={ResturantMenu} />

                </Switch>
        </BrowserRouter>
    )
}
export default Routers