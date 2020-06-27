import {transformErrors} from "./errorsHelper"

describe("transformErrors", () => {
  test("returns message and contact for server errors", () => {
    const error = {
        response: {
            data: {
                message: 'Server issue'
            }
        }
    }
    expect(transformErrors(error)).toEqual({
        message: 'Server issue',
        contact: 'Please contact us test@example.com'
    })
  })

  test("returns message for errors with request object", () => {
    const error = {
        request: 'Bad data'
    }
    
    expect(transformErrors(error)).toEqual({
        message: 'Bad data',
        contact: 'Please contact us test@example.com'
    })
  })

  test("returns message and contact for server errors", () => {
    const error = {
        message: 'Rest of the errors' 
    }
    expect(transformErrors(error)).toEqual({
        message: 'Rest of the errors',
        contact: 'Please contact us test@example.com'
    })

  })
})
