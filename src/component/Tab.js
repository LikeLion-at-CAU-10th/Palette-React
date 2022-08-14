import React from 'react'
import {TabDom, } from '../styles/PDstyled'

const Tab = (props) => {
    return (
        <TabDom> {props.name} {props.img} </TabDom>

        
    )
}

export default Tab