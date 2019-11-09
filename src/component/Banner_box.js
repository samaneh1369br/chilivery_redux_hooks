import React from "react"
import BannerInner from "./Banner_inner"
import BannerHeader from "./Banner_header"
import styled  from "styled-components"
const BannerBg=styled.div`
width:100%;
height:900px;
background-image: url('https://chilivery.com/app/user/assets/img/base/background3.jpg');
background-position: center center;
background-repeat: no-repeat;
min-height:100%;
`
const BannerBox=()=>{
return(
    <BannerBg className="banner_bg">
     <BannerHeader/>
     <BannerInner />
    </BannerBg>
);
}
export default BannerBox;