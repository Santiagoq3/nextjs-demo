import React from 'react'

export const DarkLayout = ({children}) => {
  return (
    <div style={{
        backgroundColor: '#ccc',
        padding: "10px" 
    }}>
      <h1>darkLayout</h1>
        {children}
    </div>
  )
}
