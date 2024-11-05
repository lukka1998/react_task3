import React from 'react'

export const CardTitle = ({title}) => {
    return (
        <div>
        <div style={{ color: "var(--Dark-Navy, #242742)", fontFeatureSettings: "'liga' off, 'clig' off", fontFamily: "Roboto", fontSize: "56px", fontStyle: "normal", fontWeight: 700, lineHeight: "100%" }}>{title}</div>

        </div>
    )
}
export default CardTitle