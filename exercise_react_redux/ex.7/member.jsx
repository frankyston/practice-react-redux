import React from 'react'

const member = props => (
    <div>
        {props.name} <strong>{props.lastName}</strong>
    </div>
)

member.defaultProps = {
    lastName: "Silva"
}

export default member