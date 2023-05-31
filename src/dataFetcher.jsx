import React from 'react'

function dataFetcher(WrappedComponent,data) {
  return function (props){
    return <WrappedComponent {...props} data={data} />
  }
}

export default dataFetcher