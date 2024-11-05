import React from 'react'

export const MainButton = ({placeholder}) => {
    return (
        <div>
            <button style={{ cursor:"pointer" , width:"412px" ,padding:"15px" ,borderRadius: '8px',background: '#242742', height:"56px", color:"white" ,fontWeight:"700" }}>{placeholder}</button>
        </div>
    )
}
export default MainButton