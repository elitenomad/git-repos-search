import React from "react"
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

const Errors = (props) => {
    if(!props.error) return null
    
    let {
        message,
        contact,
    } = props.error

    if(message) {
        return (
            <Alert variant="danger" size="sm">
                <Alert.Heading>{message}</Alert.Heading>
                <p>
                    { contact }
                </p>
            </Alert>
        )
    }

    return null
}

Errors.propTypes = {
    message: PropTypes.string,
    contact: PropTypes.string
}

export default Errors