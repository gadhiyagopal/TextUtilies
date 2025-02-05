import React from 'react'

function Header (props) {

    let { page , heading } = props;
    
  return (
    
    <>
    <div className="header">
        <h2>{page}</h2>
        <p>{heading}</p>
    </div>
    </>
  )
}

export default Header;
