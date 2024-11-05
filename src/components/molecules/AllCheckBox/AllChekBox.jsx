import React from 'react'
import ChekBox from '../../atoms/CheckBox.jsx/ChekBox'
export const AllChekBox = () => {
    return (
        <div style={{display:"flex" , gap:"10px", flexDirection:"column"}}>
           <ChekBox Desc="Product discovery and building what matters"/>
           <ChekBox Desc="Measuring to ensure updates are a success"/>
           <ChekBox Desc="And much more!"/>
        </div>
    )
}
export default AllChekBox