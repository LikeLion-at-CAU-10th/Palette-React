import React from 'react'
import styled from 'styled-components'

export const Date = styled.div`
/* background-color: green; */
flex-basis: 5%;
display: flex;
align-items: center;
`

const DateInput = () => {
    return (
        <Date>날짜선택</Date>
    )
}

export default DateInput