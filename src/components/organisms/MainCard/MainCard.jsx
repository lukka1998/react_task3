import React from 'react'
import LeftSideContent from '../../molecules/LeftSideContent/LeftSideContent'
import RigthSideContent from '../../molecules/RightSideContent/RigthSideContent'
export const MainCard = () => {
    return (
        <div style={{display:"flex", padding:"50px", margin:"auto", justifyContent:"center", alignContent:"center", height:"100vh" ,gap:"70px"  ,width:"100%" ,backgroundColor:"#36384D" }}>
            <div style={{display:"flex",border:" 1px solid black", width:"auto", height:"70%" , gap:"70px" , padding:"60px" ,backgroundColor:"white", borderRadius:"30px" }}>
            <LeftSideContent></LeftSideContent>
            <RigthSideContent></RigthSideContent>
            </div>
            
        </div>
    )
}
