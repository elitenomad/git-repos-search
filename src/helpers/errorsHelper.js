export const transformErrors = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that is not in the range of 2xx
        const {
            message
        } = error.response.data

        return {
            message: message,
            contact: 'Please contact us test@example.com'
        }
      } 
      
     if (error.request) { // Reference: Axios documentation
        // The request was made but no response was received
        return {
            message: error.request,
            contact: 'Please contact us test@example.com'
        }
      }


    // Something happened in setting up the request that triggered an Error
    return {
        message: error.message,
        contact: 'Please contact us test@example.com'
    }
  }
  