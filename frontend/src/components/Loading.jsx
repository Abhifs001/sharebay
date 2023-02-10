import React from 'react'
import { Spin } from 'antd'

const Loading = () => {
  return (
        <div className='loading'  >
            <h1 className='loading-title' > Loading....</h1>
            <h1 className='loading-title' > <   Spin/></h1>
            
        </div>
  )
}

export default Loading

