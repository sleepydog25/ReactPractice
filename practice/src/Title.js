import React from 'react'

const title = ({mainFormName}) => {

  const titleStyle ={
    textDecoration:"underline",
    marginTop:"10px",
    marginBottom:"10px"
  };

  return (
    <div>
        <h3 style={titleStyle}>Form {mainFormName}</h3>
    </div>
  )
}

export default title;