import React from 'react';

export const Email = () => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <label htmlFor="username">Email adress</label>
            <input style={{width:"376px" ,padding:"15px"}} type="email" id="username" name="username" placeholder='email@company.com' />
        </div>
    );
}

export default Email;
