import React from 'react'

export const ChekBox = ({ Desc }) => {
    return  (
        <div style={{display:"flex", gap:"10px ", alignItems:'center' }}>
            <input type="checkbox" />
            <div style={{ color: "var(--Dark-Navy, #242742)", fontFeatureSettings: "'liga' off, 'clig' off", fontFamily: "Roboto", fontSize: "16px", fontStyle: "normal", fontWeight: 400, lineHeight: "150%" }}> {Desc}</div>
            
        </div>
    )
}
export default ChekBox