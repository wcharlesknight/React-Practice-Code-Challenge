import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate" 
          onClick={() => props.eaten(props.sushi)} >
        { 
            false ? null : 
            <img src={props.sushi['img_url']} alt='sushi' width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi['name']} - ${props.sushi['price']}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi