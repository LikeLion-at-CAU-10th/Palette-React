import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Test = () => {
    const navigate = useNavigate();
    const handleClick = (url) => {
        navigate(url)
    }
    const data = [1,2,3,4,5]

    
    return (
    <>
    {       
    data.map((d,i) => (<div key={i} onClick={()=>{handleClick(d)}}>Test</div>))
    }   
    </>
    )
}

export default Test