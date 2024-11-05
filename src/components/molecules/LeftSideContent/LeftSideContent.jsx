import React from 'react'
import CardTitle from '../../atoms/CardTitle/CardTitle'
import AllChekBox from '../AllCheckBox/AllChekBox'
import Description from '../../atoms/Description/Description'
import Email from '../../atoms/Email/Email'
import MainButton from '../../atoms/MainButton/MainButton'

export const LeftSideContent = () => {
    return (
        <div style={{display:"flex" ,flexDirection:"column" , gap:"20px", width:"376px", height:"585px" ,justifyContent:"center" , }}>
            <CardTitle title="Stay updated!" ></CardTitle>
            <Description Desc="Join 60,000+ product managers receiving monthly updates on:"></Description>
            <AllChekBox></AllChekBox>
            <Email></Email>
            <MainButton placeholder="Subscribe to monthly newsletter" ></MainButton>
            
        </div>
    )
}
export default LeftSideContent