import React from 'react'
import {TabDom, } from '../styles/PDstyled'

const Tab = (props) => {
    return (
        <TabDom onClick={props.click}> {props.name} {props.img} </TabDom>

        
    )
}

export default Tab