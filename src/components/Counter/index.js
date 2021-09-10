import React from 'react'

import { NumberRounded, Number  } from './style'

const Counter = (props) => {
    return (
        <NumberRounded color={ props.color }>
            <Number>
                { props.value }
            </Number>
        </NumberRounded>
    )
}

export default Counter;