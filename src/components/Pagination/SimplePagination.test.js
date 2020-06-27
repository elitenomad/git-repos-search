import React from "react"
import {mount} from "enzyme"
import SimplePagination from "./SimplePagination"
import Pagination from 'react-bootstrap/Pagination'
import {act} from '@testing-library/react'

describe("SimplePagination", () => {
  let pages
  const onClick = jest.fn()

  const wrapper = () => mount(<SimplePagination pages={pages} onClick={onClick}/>)

  afterEach(() => {
      pages = undefined
  })

  describe("when pages is not  > 1", () => {
    beforeEach(() => {
        pages = 1
    })

    test("renders null", () => {
      expect(wrapper().isEmptyRender()).toBeTruthy()
    })
  })

  describe("when pages is > 1", () => {
    beforeEach(() => {
      pages = 3
    })

    test("renders only bootstrap Pagination component", () => {
      expect(wrapper().find(Pagination).exists()).toBeTruthy()
    })


    describe("when active page is 1", () => {
        test("renders Pagination.Prev with disabled true", () => {
          expect(wrapper().find(Pagination.Prev).props().disabled).toBeTruthy()
        })
    
        test("renders Pagination.Next with disabled false", () => { 
          // Not sure why toBeFalsey not working :(
          expect(wrapper().find(Pagination.Next).props().disabled).toEqual(false)
        })
    })

    describe("when active page is last page", () => {
        let renderedWrapper

        beforeEach(() => {

            act(() => {
                renderedWrapper = wrapper()
                renderedWrapper.find(Pagination.Next).props().onClick()
                renderedWrapper.find(Pagination.Next).props().onClick()
                renderedWrapper.find(Pagination.Next).props().onClick()
                renderedWrapper.update()
            })
           
        })

        test("renders Pagination.Prev with disabled true", () => {
          expect(renderedWrapper.find(Pagination.Prev).props().disabled).toEqual(true)
        })
    
        test("renders Pagination.Next with disabled false", () => { 
          expect(renderedWrapper.find(Pagination.Next).props().disabled).toEqual(false)
        })
    })
  })
})
