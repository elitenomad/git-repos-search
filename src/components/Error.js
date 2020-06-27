import React from "react"
import Alert from 'react-bootstrap/Alert'

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

export default Errors