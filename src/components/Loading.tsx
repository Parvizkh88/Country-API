import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
     <>
     <h1>Please wait</h1>
      <Spinner animation="border" size="sm" />
      <Spinner animation="border" />
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
    </>
  )
}

export default Loading





